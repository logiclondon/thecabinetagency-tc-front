<template>
    <div>
        <h1 :class="{'to-show': this.$store.state.showPageTitle}">About</h1>
        <div class="wave-anim" :class="{'to-anim': this.startAnimOne, 'to-hide': this.hideAnimOne}"></div>

        <section class="mod-content-one">
            <div class="container">
                <div class="wrapper-content content-liquid">
                    <div class="title title-ul-2">
                        <em>Uncertainty is the new certainty</em>
                        LIQUID TIMES NEED <a href="javascript:;"><span>LIQUID BRANDS</span></a>
                    </div>
                </div>
            </div>
        </section>

        <section class="mod-content-two">
            <div class="cols breaktab1">
                <div class="col bg-img" :style="`background-image:url(${getBaseUrl}${randomCombinedImage[0].url});`"></div>
                <div class="col">
                    <div class="container">
                        <div class="content">
                            <div class="title title-lg" v-html="pageContent.combined_content.title"></div>
                            <div class="text long" v-html="pageContent.combined_content.text"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mod-content-three">
            <div class="container lg">
                <div class="wrapper-content">
                    <div class="title title-ul-1">What we do...</div>
                    <div class="list scrolling-text" data-direction='up' data-duplicated="true">
                        <div class="title title-ul-1" v-html="pageContent.content_seq_1.text"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mod-content-four">
            <div class="container disabled" @mouseover="startContentVideo">
                <video playsinline muted class="is-desk content-vid" ref="videoAboutRef">
                    <source :src="'/videos/tc-about-content4-vid-desk.mp4'" type="video/mp4">
                </video>
                <video playsinline autoplay loop muted class="is-mob content-vid">
                    <source :src="'/videos/tc-about-content4-vid-mob.mp4'" type="video/mp4">
                    <source :src="'/videos/tc-about-content4-vid-mob.ogg'" type="video/ogg">
                    <source :src="'/videos/tc-about-content4-vid-mob.webm'" type="video/webm">
                </video>
            </div>
        </section>

        <div class="mod-content-five-extra top">
            <div class="container md title-lg">
                Helping brands around the globe
            </div>
        </div>
        <section class="mod-content-five">
            <div class="container md">
                <div class="img">
                    <img src="/images/img-about-map.png" alt="">
                </div>
            </div>
        </section>
        <div class="mod-content-five-extra bottom"></div>

        <section class="mod-content-six">
            <div class="container sm">
                <div class="img">
                    <img src="/images/img-about-words.svg" alt="">
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
                class: this.isTouch ? 'mobile about' : 'desk about',
            }
        }
    },

    mounted() {
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
            this.initMap();
        }, 200);

        setTimeout(() => {
            this.initTickerUp();
        }, 10);

        this.startAnimOne = true;

        setTimeout(() => {
            this.hideAnimOne = true;
        }, 2800);

        setTimeout(() => {
            this.$store.state.showPageTitle = true;
        }, 900);
    },

    methods: {
        startContentVideo() {
            this.$refs.videoAboutRef.play();
        },

        initMap() {
            var tooltip = $(".tooltip");
            $('.map a').hover(function() {

                $(this).addClass("enabled heyo");
                tooltip.addClass('active');
                tooltip.html($(this).children().attr('title'));
            }, function() {
                tooltip.removeClass('active');
            });

            $(document).on('mousemove', function(e){
                tooltip.css({
                    left:  e.pageX,
                    top:   e.pageY - 50
                });
            });
        },
    },

    async asyncData({ $axios }) {
        const pageContent = await $axios.$get(`${process.env.baseUrl}/about`)
        return { pageContent }
    },

    computed: {
        getBaseUrl() {
            return process.env.baseUrl;
        },
        randomCombinedImage() {
            return this.pageContent.combined_content.gallery.sort(function(){return 0.5 - Math.random()});
        }
    },
}
</script>

<style lang="scss">
    @import '../../assets/styles/main.scss';
    @import '../../assets/styles/sections/about.scss';
</style>
