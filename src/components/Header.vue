<template>
    <div>
        <div class="mobile-header" :class='{open : open === true}'>
            <button class="toggle-menu" @click="open = !open">
                <v-icon name="bars"></v-icon>
            </button>
        </div>
        <header class="header">
            <div class="header-content">
                <div class="header-top mb-3">
                    <div class="header-title">
                        <!-- <img src="@/assets/logotype.svg" alt="Main logo"> -->
                        <img src="@/assets/ag.svg" alt="Main logo">
                    </div>
                </div>
                <nav class="header-nav">
                    <ul id="nav" class="site-nav-menu mb-5">
                        <li class="header-nav-item" v-for="(link,i) in links" :key="i" @click="open = !open">
                            <router-link class="header-nav-link" :to="link.url"> 
                                <span>{{link.text}}</span>
                            </router-link>
                        </li>
                        <li class="header-nav-item" v-if="isUserLoggedIn" @click="open=!open">
                            <router-link class="header-nav-link" to="/admin"> 
                                <span>ADMIN</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="social-links">				
                    <a href="https://www.instagram.com/flokiowl/" target="_blank" class="social-link">
                        <v-icon scale="1.1" name="brands/instagram"></v-icon>
                    </a>
                    <a href="https://t.me/flokiowl" target="_blank" class="social-link">
                        <v-icon scale="1.1" name="brands/telegram-plane"></v-icon>
                    </a>
                    <a href="https://github.com/flokiowl" target="_blank" class="social-link">
                        <v-icon scale="1.1" name="brands/github"></v-icon>
                    </a>
                    <div class="copyright-block">
                        © 2020 All rights reserved.
                    </div>
                </div>
            </div>
        </header>
        <div class="backdrop" @click="open = !open"></div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            links: [
				{icon:'user-circle', text:'Главная', url: '/' },
				{icon:'address-card', text:'Резюме', url: '/resume' },
				{icon:'briefcase', text:'Портфолио', url: '/portfolio' },
				{icon:'address-book', text:'Контакты', url: '/contact' }
			],
			socials: [
				{ icon:'instagram', url: 'https://www.instagram.com/flokiowl/' },
				{ icon:'telegram', url: 'https://t.me/flokiowl' },
				{ icon:'github', url: 'https://github.com/flokiowl' }
			],
			open: false
        }
    },
    computed: {
        isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn
		}
    }
}
</script>

<style lang="scss">
</style>