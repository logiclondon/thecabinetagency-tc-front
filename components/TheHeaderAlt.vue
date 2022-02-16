<template>
    <div>
        <div class="header-alt">
            <div class="container lg">
                <a class="logo-liquid is-img" href="/liquid">Liquid Thinking</a>
                <div class="icon-menu" @click="toggleMobileNavAlt">
                    <div class="bar" :class="{'animate': this.showMobileNavAlt}"></div>
                </div>
                <nav>
                    <ul class="main">
                        <li><a href="/liquid/category/weekly-edit">Weekly Edit</a></li>
                        <li><a href="/liquid/category/liquid-thinking">Thinking</a></li>
                        <li><a href="/liquid/category/culture">Culture</a></li>
                        <li><a href="/liquid/category/trailblazing-trends">Trailblazing Trends</a></li>
                        <li><a class="logo-main is-img" href="/">TheCabinet</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="nav-alt-mob" :class="{'to-show': this.showMobileNavAlt}">
            <nav>
                <ul class="main">
                    <li><a href="/liquid/category/weekly-edit">Weekly Edit</a></li>
                    <li><a href="/liquid/category/liquid-thinking">Thinking</a></li>
                    <li><a href="/liquid/category/culture">Culture</a></li>
                    <li><a href="/liquid/category/trailblazing-trends">Trailblazing Trends</a></li>
                    <li><a class="logo-main is-img" href="/">TheCabinet</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showMobileNavAlt: false,
        }
    },

    methods: {
        toggleMobileNavAlt() {
            this.showMobileNavAlt = !this.showMobileNavAlt;
        },
    },
}
</script>
