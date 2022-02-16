<template>
    <div>
        <h1 :class="{'to-show': this.$store.state.showPageTitle}" v-html="projectContent.title"></h1>
        <div class="wave-anim" :class="{'to-anim': this.startAnimOne, 'to-hide': this.hideAnimOne}"></div>

        <section class="mod-content-one">
            <div class="wrapper-block" v-for="itemBlock in projectContent.content_blocks">

                <div class="blk-content blk-video" v-if="(itemBlock.__component=='content.block-video')">
                    <div class="title title-md" @click="toggleVideo">Click to view video</div>
                    <div class="vid-player" data-plyr-provider="vimeo" :data-plyr-embed-id="itemBlock.blk_video_id"></div>
                </div>

                <div class="blk-content blk-combined" v-if="(itemBlock.__component=='content.block-combined-content')" :style="'background-color:' + itemBlock.blk_bgcolor">
                    <div class="container md has-padding-both">
                        <div class="cols break3" :class="{'is-reversed': itemBlock.blk_reverse_order}">
                            <div class="col">
                                <div class="img">
                                    <img :src="`${getBaseUrl}${itemBlock.blk_img.url}`" alt="">
                                </div>
                            </div>
                            <div class="col">
                                <div class="content" :class="{'is-white': itemBlock.blk_text_white}">
                                    <div class="text long" v-html="itemBlock.blk_text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="blk-content blk-2-images" v-if="(itemBlock.__component=='content.block-2-images')" :style="'background-color:' + itemBlock.blk_bgcolor">
                    <div class="container md has-padding-both">
                        <div class="content" :class="{'is-reversed': itemBlock.blk_reverse_order}">
                            <div class="img">
                                <img :src="`${getBaseUrl}${itemBlock.blk_img_1.url}`" alt="">
                            </div>
                            <div class="img">
                                <img :src="`${getBaseUrl}${itemBlock.blk_img_2.url}`" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="blk-content blk-2-images-alt" v-if="(itemBlock.__component=='content.block-2-images-alternate')" :style="'background-color:' + itemBlock.blk_bgcolor">
                    <div class="container md has-padding-both">
                        <div class="content" :class="{'is-reversed': itemBlock.blk_reverse_order}">
                            <div class="img">
                                <img :src="`${getBaseUrl}${itemBlock.blk_img_1.url}`" alt="">
                            </div>
                            <div class="img">
                                <img :src="`${getBaseUrl}${itemBlock.blk_img_2.url}`" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="blk-content blk-gallery" v-if="(itemBlock.__component=='content.block-gallery')">
                    <div class="wrapper-slider">
                        <div class="swiper-container swiper-container-images slider-images">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide bg-img" v-for="image in itemBlock.blk_gallery" :key="image.id" :style="`background-image:url(${getBaseUrl}${image.url});`"></div>
                            </div>
                            <div class="swiper-button-prev" v-if="itemBlock.blk_gallery.length > 1"></div>
                            <div class="swiper-button-next" v-if="itemBlock.blk_gallery.length > 1"></div>
                        </div>
                    </div>
                </div>

                <div class="blk-content blk-img-single" v-if="(itemBlock.__component=='content.block-single-image')" :style="'background-color:' + itemBlock.blk_bgcolor">
                    <div v-if="itemBlock.blk_image_fw" class="container bg-img disabled" :style="`background-image:url(${getBaseUrl}${itemBlock.blk_image.url});`">
                    </div>
                    <div v-if="!itemBlock.blk_image_fw" class="container has-padding-both md">
                        <img :src="`${getBaseUrl}${itemBlock.blk_image.url}`" alt="" v-if="!itemBlock.blk_image_fw">
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
            title: this.projectContent.page_info.page_title ? this.projectContent.page_info.page_title : this.projectContent.title,
            meta: [
                { hid: 'description', name: 'description', content: this.projectContent.page_info.page_description },
                { hid: 'keywords', name: 'kerwords', content: this.projectContent.page_info.page_keywords },
            ],
            bodyAttrs: {
                class: this.isTouch ? 'mobile case' : 'desk case',
            }
        }
    },

    async asyncData({ params, $axios }) {
        const projectContent = await $axios.$get(`${process.env.baseUrl}/projects/${params.slug}`)
        return { projectContent }
    },

    mounted() {
        this.startAnimOne = true;

        setTimeout(() => {
            this.hideAnimOne = true;
        }, 2800);

        setTimeout(() => {
            this.$store.state.showPageTitle = true;
        }, 900);

        const playerOptions = {
            tooltips: {
                seek: false,
            },
            // autoplay: true,
            loop: {
                active: true,
            },
            controls: [
                'play-large',
            ],
        }

        const players = Plyr.setup('.vid-player', playerOptions);

        setTimeout(() => {
            let mySwiperCases = new Swiper('.swiper-container-images', {
                loop: true,
                effect: 'fade',
                speed: 800,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }, 100);

    },

    methods: {

        toggleVideo() {

        },

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
    @import '../../assets/styles/sections/case.scss';
</style>
