<template>
<link href="./css/style.css" rel="stylesheet" type="text/css">
<body>
    <div class="container">
        <h1>Login</h1>
        <input v-model="email" placeholder="Email">
        <input v-model="password" placeholder="Password">
        <button @click="login" class="boton" value="Login">Login</button>
    </div>
</body>
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
            email: 'hola@hola.com', password: 'hola123'
        }
    },
    methods: {
        login() {
            this.$auth.login(this.email, this.password);
        }
    }
}
</script>

<style scoped>

</style>
