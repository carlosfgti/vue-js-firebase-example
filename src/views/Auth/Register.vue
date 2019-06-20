<template>
    <div>
        <h1 class="title">Cadastro</h1>

        <section>
            <b-field label="Nome">
                <b-input v-model="formData.name"></b-input>
            </b-field>
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

            <b-button
                type="is-success"
                outlined
                :loading="loading">
                Cadastrar
            </b-button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            loading: false,
            formData: {
                name: '',
                email: '',
                password: '',
            }
        }
    }
}
</script>

