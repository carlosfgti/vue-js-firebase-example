<template>
    <div>
        <h1 class="title">Login</h1>

        <section>
            <b-field label="E-mail">
                <b-input v-model="email"></b-input>
            </b-field>
            <b-field label="Senha">
                <b-input
                    type="password"
                    v-model="password"
                    password-reveal>
                </b-input>
            </b-field>

            <button
                :class="['button', 'is-success', 'is-outlined', {'is-loading': loading}]"
                @click="login">
                Entrar
            </button>
        </section>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data () {
        return {
            loading: false,
            email: '',
            password: '',
        }
    },

    methods: {
        login () {
            this.loading = true

            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    (user) => {
                        console.log(user)

                        // this.$router.push({name: 'chat'})
                        this.$router.replace({name: 'chat'})
                    },
                    (err) => {
                        console.log(`Ops... ${err.message}`)
                    }
                )
                .finally(() => this.loading = false)
        }
    }
}
</script>
