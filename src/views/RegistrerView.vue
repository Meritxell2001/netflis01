<template>
<link href="./css/style.css" rel="stylesheet" type="text/css">
<body>
    <div class="container">
        <h1>Registrer</h1>
        <input v-model="name" placeholder="name">
        <input v-model="lastName" placeholder="lastName">
        <input v-model="email" placeholder="Email">
        <input v-model="password" placeholder="Password">
        <button @click="registrer" class="boton" value="Registrer">Registrer</button>
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
            email: 'hola@hola.com', password: 'hola'
        }
    },
    methods: {
        registrer() {
            this.$auth.login(this.email, this.password);
        }
    }
}
</script>

<style scoped>

</style>
