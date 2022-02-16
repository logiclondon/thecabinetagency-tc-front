import Vue from 'vue';

Vue.mixin({

    data () {
        return {
            isTouch: false,
        }
    },

    beforeMount() {
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.isTouch = true;
        }
    },

    methods: {
        toggleMainNav() {
            this.$store.state.showMainNav = !this.$store.state.showMainNav;
            this.$store.state.showPageTitle=!this.$store.state.showPageTitle;
        },

        showPageTitle() {
            this.$store.state.showPageTitle = true;
        },

        initTickerUp() {
            setTimeout(() => {
                $('.scrolling-text').marquee('destroy');
            }, 10);

            setTimeout(() => {
                $('.scrolling-text').marquee({
                    duration: 10500,
                    startVisible: true,
                });
            }, 50);
        },
    }

})
