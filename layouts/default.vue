<template>
    <div>
        <div class="main-overlay" :class="{'to-remove': removeMainOverlay}"></div>
        <main>
            <TheHeader/>
            <TheHeaderAlt/>
            <Nuxt />
        </main>
    </div>
</template>

<script>
export default {
    data () {
        return {
            removeMainOverlay: false,
        }
    },

    mounted () {
        setTimeout(() => {
            this.removeMainOverlay = true;
        }, 300);
    },

}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.main-overlay {
    background-color: #FFF;
    position:fixed;
    top: 0;
    z-index: 10000;
    width:    100%;
    height:  100vh;
    opacity: 1;
    visibility: visible;
    transition: all .5s ease-in-out;
    overflow: hidden;

    &.to-remove {
        visibility:hidden;
        z-index:  -1;
        opacity:   0;
    }
}

</style>
