<template>
    <h1>Login</h1>
    <input v-model="email" placeholder="Email">
    <input v-model="password" placeholder="Password">
    <button @click="login" value="Login">Login</button>
</template>

<script>
export default {
    created() {
        this.$auth.$subscribe((mutation, state) => {
            if (state.isAutenticated == true) {
                this.$router.push('/');
            }
        })
    },
    data() {
        return {
            email: '', password: ''
        }
    },
    methods: {
        login() {
            this.$auth.login(this.email, this.password);
        },
    }
}
</script>

<style scoped>

</style>
