<template>
    <div>
        <h1 class="title">Cadastro</h1>

        <section>
            <!-- <b-field label="Nome">
                <b-input v-model="formData.name"></b-input>
            </b-field> -->
            <b-field label="E-mail">
                <b-input v-model="formData.email"></b-input>
            </b-field>
            <b-field label="Senha">
                <b-input
                    type="password"
                    v-model="formData.password"
                    password-reveal>
                </b-input>
            </b-field>

            <button
                :class="['button', 'is-success', 'is-outlined', {'is-loading': loading}]"
                @click="register">
                Cadastrar
            </button>
        </section>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'register',
    data () {
        return {
            loading: false,
            formData: {
                // name: '',
                email: '',
                password: '',
            }
        }
    },

    methods: {
        register () {
            this.loading = true

            // console.log({...this.formData})
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.formData.email, this.formData.password)
                .then(
                    (user) => {
                        console.log(user)

                        this.$router.push({name: 'chat'})
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

