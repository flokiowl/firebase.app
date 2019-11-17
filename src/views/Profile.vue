<template>
	<div class="contact site-page" v-if="!loading">
		<div class="site-page-title">
			<h2 class="page-title">Профиль</h2>
			<h5 class="page-description">Это Ваш личный профиль</h5>
		</div>
		<b-card no-body>
			<b-tabs pills card vertical nav-wrapper-class="w-20">
				<b-tab title="Портфолио" active>
					<div class="portfolio-actions">
						<b-button v-b-modal.modalNewWork>Добавить</b-button>
					</div>
					<AddNewWork/>
					<WorksList/>
				</b-tab>
			</b-tabs>
		</b-card>
		<div class="btn">
            <b-button type="button" variant="danger" class="profile-logout" @click="onLogout">Выйти</b-button>
        </div>
	</div> 
	<div class="loading" v-else>
        <b-spinner label="Загрузка..."></b-spinner>
    </div>
</template>

<script>
import AddNewWork from '@/components/AddNewWork'
import WorksList from '@/components/WorksList'

export default {
	components: {
		AddNewWork, WorksList
	},
	data () {
		return {
			modalShow: false
		}
	},
	computed: {
		loading () {
            return this.$store.getters.loading
        },
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn
		},
	},
    methods: {
		onLogout () {
			this.$store.dispatch('logoutUser')
			this.$router.push('/')
		}
	}
}
</script>