<template>
	<div class="admin-page" v-if="!loading">
		<div class="">		
			<b-card no-body>
				<b-tabs pills card vertical nav-wrapper-class="w-20">
					<b-tab title="Портфолио" active>
						<div class="portfolio-actions">
							<b-button variant="success" v-b-modal.modalNewWork>Добавить</b-button>
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
	</div> 
	<div class="loading" v-else>
        <div class="sk-folding-cube">
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		</div>
    </div>
</template>

<script>
import AddNewWork from '@/components/AddNewWork'
import WorksList from '@/components/WorksList'

export default {
	components: {
		AddNewWork, WorksList
	},
	metaInfo: {
		title: 'ADMIN',
		htmlAttrs: {
			lang: 'ru',
			amp: true
		}
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
		works () {
            return this.$store.getters.works
		}
	},
    methods: {
		onLogout () {
			this.$store.dispatch('logoutUser')
			this.$router.push('/')
		}
	}
}
</script>
