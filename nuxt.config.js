export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Creative Branding Design, Strategy, Activation &amp; Innovation Agency - TheCabinet',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'author', name: 'author', content: 'TheCabinet' },
            // { name: 'robots', content: 'INDEX, FOLLOW' },
            { name: 'robots', content: 'noindex, nofollow' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/fav/favicon.ico' },
            { rel: "apple-touch-icon", sizes: "180x180", href: "/fav/apple-touch-icon.png" },
            { rel: "icon", type: "image/png", sizes: "192x192", href: "/fav/android-icon-192x192.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/fav/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "96x96", href: "/fav/favicon-96x96.png" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/fav/favicon-16x16.png" },
            { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.0/normalize.min.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/plyr/3.3.22/plyr.css' },
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js' },
            { src: 'https://cdn.jsdelivr.net/npm/jquery.marquee@1.6.0/jquery.marquee.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/plyr/3.3.22/plyr.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.5/gsap.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/liquidDistortMaterial.js' },
            { src: 'https://gux.sh/external-js/liquid-text.js' },
            { src: 'https://gux.sh/external-js/tc-main.js' },
        ],
    },

    ssr: false,
    target: 'static',

    css: [
        '~/assets/styles/main.scss'
    ],

    plugins: [
        "@/plugins/vue-lazyload",
        "~/plugins/vue-moment.js",
        '@/plugins/global',
        { src: '@/plugins/vue-scrollto', ssr: false },
    ],

    components: true,

    buildModules: [
    ],

    modules: [
        '@nuxtjs/axios',
        'cookie-universal-nuxt',
        '@nuxtjs/google-analytics',
    ],

    googleAnalytics: {
        id: 'UA-46203871-1'
    },

    // router: {
        // linkActiveClass: 'current',
        // middleware: 'delay',
    // },

    env: {
        // baseUrl: 'http://localhost:1337',
        baseUrl: 'https://staging-cms.thecabinet.agency',
    },

    build: {
    }
}
