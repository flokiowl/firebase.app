<template>
	<div class="login site-page">
		<div class="site-page-title">
			<h2 class="page-title">Вход</h2>
			<h5 class="page-description">Войдите в свой аккаунт</h5>
		</div>
		<div class="login-content">
			<span class="bg"></span>
			<div class="login-icon">
				<v-icon name="user-check"></v-icon>
			</div>
			<b-form class="login-form" @submit="onSubmit" ref="form">
				<b-form-group
					label="Email адресс:"
					label-for="login-email"	
				>
					<b-input-group prepend="@">
						<b-form-input
							id="login-email"
							type="email"
							required
							placeholder="Введите email"
                        	v-model="email"
						></b-form-input>
					</b-input-group>
				</b-form-group>

				<b-form-group label="Ваш Пароль:" label-for="login-password">
					<b-form-input 
						id="login-password" 
						type="password"
						required 
						placeholder="Введите пароль"
						v-model="password"
					></b-form-input>
				</b-form-group>
				<div class="login-btn-wrapper">
					<button 
						type="submit" 
						class="default-btn" 
						@click="onSubmit" 
						:loading="loading"
					>
						<b-spinner v-if="loading" small label="Загрузка"></b-spinner>
						<span v-else>Войти</span>
					</button>
				</div>
			</b-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email:'',
            password:''
		}
	},
	computed: {
        loading () {
            return this.$store.getters.loading
        }
    },
	methods: {
		onSubmit () {
			const user = {
				email:this.email,
				password:this.password
			}
			this.$store.dispatch('loginUser', user)
				.then(() => {
					this.$router.push('/profile')
				})
				.catch(() => {})
		}
	},
	created () {
        if (this.$route.query['loginError']) {
            this.$store.dispatch('setError', 'Авторизируйтесь, что бы получить доступ к этой странице.')
        }
    }
};
</script>