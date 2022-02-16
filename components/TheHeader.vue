<template>
    <header :class="{'to-show': this.$store.state.showMainNav}">
        <div class="icon-menu" @click="toggleMainNav">
            <div class="bar" :class="{'animate': this.$store.state.showMainNav}"></div>
        </div>
        <nav>
            <a class="logo-main is-img" href="/">TheCabinet</a>
            <div class="tagline">Liquid Thinking</div>
            <ul class="main title title-md">
                <li><a href="/about">About</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/liquid">Liquid Thinking</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>
