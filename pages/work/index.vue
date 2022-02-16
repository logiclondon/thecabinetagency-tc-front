<template>
    <div>
        <h1 :class="{'to-show': this.$store.state.showPageTitle}">Work</h1>
        <div class="wave-anim" :class="{'to-anim': this.startAnimOne, 'to-hide': this.hideAnimOne}"></div>

        <section class="mod-content-one">
            <div class="container md has-padding-both">

<!--                <div class="wrapper-content content-liquid">-->
<!--                    <div class="title title-ul-2">-->
<!--                        At The Cabinet we are experts in the creation design and delivery of <a href="/about/"><span class="title title-ul-2">LIQUID BRANDS</span></a>-->
<!--                    </div>-->
<!--                </div>-->

<!--                v-html="pageContent.title"-->
                <h2 class="title-ul-2 content-liquid"><em>We create</em> <a href="/about/"><span class="title title-ul-2">LIQUID BRANDS</span></a></h2>

                <div class="desc title-md" v-html="pageContent.summary"></div>
                <div class="wrapper-grid">
                    <div class="cols is-grid">
                        <a v-for="item in randomProjects" :href="'/work/' + item.slug" :key="item.id" class="bg-img item is-img" :style="`background-image:url(${getBaseUrl}${item.cover_img.formats.large.url});`">
                            <div class="content">
                                <h3 class="title-lg" v-html="item.title"></h3>
                                <h4 v-html="item.title_2"></h4>
                            </div>
                            <div class="wave-hover" v-if="!isTouch"></div>
                        </a>
                        <div class="item">
                            <div class="content last">
                                <span class="title-lg">Like what you see?</span>
                                <a href="/contact" class="title-ul-1 is-img">Let's Talk...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <TheFooter/>
    </div>
</template>

<script>
export default {

    data () {
        return {
            startAnimOne:false,
            hideAnimOne: false,
        }
    },

    head () {
        return {
            title: this.pageContent.page_info.page_title,
            meta: [
                { hid: 'description', name: 'description', content: this.pageContent.page_info.page_description },
                { hid: 'keywords', name: 'kerwords', content: this.pageContent.page_info.page_keywords },
            ],
            bodyAttrs: {
                class: this.isTouch ? 'mobile work' : 'desk work',
            }
        }
    },

    async asyncData({ $axios }) {
        const pageProjects = await $axios.$get(`${process.env.baseUrl}/projects`)
        const pageContent = await $axios.$get(`${process.env.baseUrl}/work`)
        return { pageProjects, pageContent }
    },

    mounted() {
        this.startAnimOne = true;

        setTimeout(() => {
            $(".content-liquid a").each(function(i, e) {
                var liquidText = new LiquidText(
                    e, // Element
                    0.07, // Liquid Volatility
                    1 // Speed
                ).start();
            });
        }, 500);

        setTimeout(() => {
            this.hideAnimOne = true;
        }, 2800);

        setTimeout(() => {
            this.$store.state.showPageTitle = true;
        }, 900);
    },

    computed: {
        getBaseUrl() {
            return process.env.baseUrl;
        },
        randomProjects() {
            return this.pageProjects.sort(function(){return 0.5 - Math.random()});
        }
    },

}
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
@import '../../assets/styles/sections/work.scss';
</style>
