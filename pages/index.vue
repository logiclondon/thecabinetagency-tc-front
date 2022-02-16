<template>
    <div>
        <h1 :class="{'to-show': this.$store.state.showPageTitle}">Welcome to TheCabinet</h1>
        <div class="intro-overlay bg-img" :class="{'to-remove': removeIntro}" v-if="showIntro">
            <div class="wrapper-video desk">
                <video playsinline muted ref="videoRef" id="introVideo" :class="{'to-unveil': unveilIntro}" class="vid-desk">
                    <source :src="'/videos/tc-intro-vid-' + randomIntFromInterval(1, 4) + '.mp4'" type="video/mp4">
                </video>
            </div>
            <div class="cta-scroll title-md to-unveil" @click="this.onScroll">
                <span>{{ isTouch ? 'Click to Continue' : 'Scroll' }}</span>
                <div class="arrow"></div>
            </div>
        </div>
        <div class="wave-anim" :class="{'to-anim': this.startAnimOne, 'to-hide': this.hideAnimOne}"></div>

        <section class="mod-content-one">
            <div class="container">
                <div class="wrapper-content">
                    <div class="title title-ul-2">
                        AN AWARD-WINNING CREATIVELY DRIVEN<br> BRAND DESIGN AND INNOVATION AGENCY
                    </div>
                </div>
            </div>
        </section>

        <section class="mod-content-two">
            <div class="wrapper-slider">
                <div class="swiper-container swiper-container-cases slider-cases">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in pageProjects" :key="item.id" >
                            <a class="bg-img is-img" href="/work/" :style="`background-image:url(${getBaseUrl}${item.cover_img.url});`">
                                <div class="title title-md">Click to view work</div>
                                <video playsinline muted loop class="case-vid">
                                    <source :src="`${getBaseUrl}${item.cover_video.url}`" type="video/mp4">
                                </video>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mod-content-three">
            <div class="container">
                <div class="wrapper-content content-liquid">
                    <div class="title title-ul-2">
                        At The Cabinet we are experts in the creation design and delivery of <a href="/about/"><span class="title title-ul-2">LIQUID BRANDS</span></a>
                    </div>
                </div>
            </div>
            <div class="wrapper-ticker">
                <ul class="ticker-logos scrolling-text">
                    <li class="" v-for="item in pageContent.ticker_logos" :key="item.id">
                        <img :src="`${getBaseUrl}${item.logo_img.url}`" alt="">
                    </li>
                </ul>
            </div>
        </section>

        <section class="mod-content-four bg-img" :style="`background-image:url(${getBaseUrl}${pageContent.combined_content_2.bg_img.url});`">
            <div class="container">
                <div class="wrapper-content content-liquid">
                    <div class="title title-ul-2">
                        A CREATIVE AGENCY THAT HELPS BUILD <a href="/about/"><span class="title title-ul-2">LIQUID BRANDS</span></a> THROUGH STRATEGY, INNOVATION, DESIGN AND DIGITAL TECHNOLOGIES
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
            unveilIntro: false, // fade in class for intro video
            removeIntro: false, // intro goes to see the content and page scroll
            // --
            startAnimOne:false,
            hideAnimOne: false,
            showIntro: !this.$cookies.get('tc-site-intro'),
            // showIntro: true,
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
                class: this.isTouch ? 'mobile home' : 'desk home',
            }
        }
    },

    async asyncData({ $axios }) {
        const pageContent = await $axios.$get(`${process.env.baseUrl}/home`)
        const pageProjects = await $axios.$get(`${process.env.baseUrl}/projects`)
        return { pageContent, pageProjects }
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

        // ------

        $(document).bind('wheel', () => {
            this.onScroll();
        });

        this.unveilIntro = true;

        console.log('COOKIE: ' + this.$cookies.get('tc-site-intro'));

        if (!this.$cookies.get('tc-site-intro')) {
            const cookieValObject = true;
            this.$cookies.set('tc-site-intro', cookieValObject, {
                path: '/',
                maxAge: 60 * 60 * 2,
            })
            console.log('set cookie intro');

            // -----

            setTimeout(() => {
                $('body').addClass('prevent-scroll');
            }, 10);

            setTimeout(() => {
                this.$refs.videoRef.play();
                $('body').addClass('prevent-scroll');
            }, 100);
        }

        // ---

        this.startAnimOne = true;

        setTimeout(() => {
            this.hideAnimOne = true;
        }, 2800);

        setTimeout(() => {
            this.$store.state.showPageTitle = true;
        }, 900);

        // ------

        setTimeout(function () {
            $('.scrolling-text').marquee({
                duplicated: true,
                gap: 0,
                speed: 35,
                startVisible: true,
            });
        }, 100);

        setTimeout(() => {
            let mySwiperCases = new Swiper('.swiper-container-cases', {
                loop: true,
                effect: 'fade',
                autoplay: {
                    delay: 3500,
                },
                speed: 800,
                on: {
                    transitionStart: function(){
                        var videos = document.querySelectorAll('.case-vid');
                        Array.prototype.forEach.call(videos, function(video){
                            video.pause();
                        });
                    },
                    transitionEnd: function(){
                        var activeIndex = this.activeIndex;
                        var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
                        var activeSlideVideo = activeSlide.getElementsByClassName('case-vid')[0];
                        activeSlideVideo.play();
                    },
                },
            });
        }, 100);
    },

    computed: {
        getBaseUrl() {
            return process.env.baseUrl;
        },
    },

    methods: {
        onScroll() {
            this.removeIntro= true;
            setTimeout(() => {
                $('body').removeClass('prevent-scroll');
            }, 200); // 2000
        },

        randomIntFromInterval(min, max) { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
    }

}
</script>

<style lang="scss">
    @import '../assets/styles/main.scss';
    @import '../assets/styles/sections/home.scss';
</style>
