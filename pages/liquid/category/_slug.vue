<template>
    <div>
        <section class="mod-content-one">
            <div class="wrapper-list">
                <div class="container item" :class="{'disabled': index === 0, 'md': index > 0, 'has-margin-both': index > 0}" v-for="(item, index) in orderPosts" :key="item.id">
                    <a :href="'/liquid/article/' + item.slug"  class="bg-img is-img" :style="`background-image:url(${getBaseUrl}${item.cover_img.url});`">
                        <div class="img-mob">
                            <img :src="`${getBaseUrl}${item.cover_img.url}`" alt="" :width="item.cover_img.width" :height="item.cover_img.height">
                        </div>
                        <div class="wrapper-content" :class="item.box_position ? item.box_position : 'top_left'" :style="'background-color:'+item.bgcolor+';color:'+item.fontcolor">
                            <h1 class="logo-cat logo-cat-text" v-html="pagePosts.name"></h1>
                            <h3 class="title title-md" v-html="item.title"></h3>
                            <div class="summary" v-html="item.summary"></div>
                            <div class="date">{{ item.date | moment("Do MMMM YYYY") }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <TheFooter/>
    </div>
</template>

<script>
import moment from 'vue-moment';
import _ from "lodash";

export default {

    head () {
        return {
            title: this.pagePosts.page_info.page_title ? this.pagePosts.page_info.page_title : this.pagePosts.name,
            meta: [
                { hid: 'description', name: 'description', content: this.pagePosts.page_info.page_description },
                { hid: 'keywords', name: 'kerwords', content: this.pagePosts.page_info.page_keywords },
            ],
            bodyAttrs: {
                class: this.isTouch ? 'mobile liquid category' : 'desk liquid category',
            }
        }
    },

    async asyncData({ params, $axios }) {
        const pagePosts = await $axios.$get(`${process.env.baseUrl}/blog-categories/${params.slug}`)
        return { pagePosts }
    },

    computed: {
        getBaseUrl() {
            return process.env.baseUrl;
        },

        orderPosts() {
            return _.orderBy(this.pagePosts.blog_posts, 'date', 'desc')
        }
    },

}
</script>

<style lang="scss">
    @import '../../../assets/styles/main.scss';
    @import '../../../assets/styles/sections/liquid.scss';
</style>
