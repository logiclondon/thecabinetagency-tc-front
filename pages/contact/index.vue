<template>
    <div>
        <h1 :class="{'to-show': this.$store.state.showPageTitle}">Contact</h1>
        <div class="wave-anim" :class="{'to-anim': this.startAnimOne, 'to-hide': this.hideAnimOne}"></div>

        <section class="mod-content-one">
            <div class="container md has-padding-top has-content-bottom">
                <h2 v-html="pageContent.title" class="title-ul-2 has-content-bottom"></h2>
                <div class="desc title-md" v-html="pageContent.intro_text"></div>
            </div>
            <div class="container md">
                <div class="cols has-padding-bottom break3">
                    <div class="col">
                        <div class="text long has-content-bottom" v-html="contentTextURL(this.pageContent.content_text)"></div>
                    </div>
                    <div class="col">
                        <div class="text long has-content-bottom" v-html="contentTextURL(this.pageContent.content_text_2)"></div>
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
            addListHidden: true,
            showList: false,
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
                class: this.isTouch ? 'mobile contact' : 'desk contact',
            }
        }
    },

    async asyncData({ $axios }) {
        const pageContent = await $axios.$get(`${process.env.baseUrl}/contact`)
        return { pageContent }
    },

    mounted() {
        setTimeout(() => {
            this.$store.state.showPageTitle = true;
        }, 900);

        this.startAnimOne = true;

        setTimeout(() => {
            this.hideAnimOne = true;
        }, 2800);
    },

    methods: {
        contentTextURL(field) {
            return field.replace(/\/uploads\//g, process.env.baseUrl + '/uploads/');
        }
    },

    computed: {
        getBaseUrl() {
            return process.env.baseUrl;
        },
    },
}
</script>

<style lang="scss">
    @import '../../assets/styles/main.scss';
    @import '../../assets/styles/sections/contact.scss';
</style>
