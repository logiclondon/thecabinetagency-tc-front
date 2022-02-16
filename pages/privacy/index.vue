<template>
    <div>
        <h1 :class="{'to-show': this.$store.state.showPageTitle}">Legal</h1>
        <div class="wave-anim" :class="{'to-anim': this.startAnimOne, 'to-hide': this.hideAnimOne}"></div>

        <section class="mod-content-one">
            <div class="container sm has-padding-both">
                <h2 v-html="pageContent.title" class="title-ul-2 has-content-bottom"></h2>
                <div class="text long" v-html="pageContent.content_text"></div>
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
                class: this.isTouch ? 'mobile legal' : 'desk legal',
            }
        }
    },

    mounted() {
        this.startAnimOne = true;

        setTimeout(() => {
            this.hideAnimOne = true;
        }, 2800);

        setTimeout(() => {
            this.$store.state.showPageTitle = true;
        }, 900);
    },

    async asyncData({ $axios }) {
        const pageContent = await $axios.$get(`${process.env.baseUrl}/privacy`)
        return { pageContent }
    },

}
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
@import '../../assets/styles/sections/legal.scss';
</style>
