<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Editar Formulário</h3>
        
            <form @submit.prevent="editar">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" v-model="cliente.nome" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="cliente.email" required>
                </div>

                <div class="form-group">
                    <label>Telefone</label>
                    <input type="text" class="form-control" v-model="cliente.telefone" required>
                </div>

                <div class="form-group">
                    <label>CNPJ</label>
                    <input type="text" class="form-control" v-model="cliente.cnpj" required>
                </div>

                <div class="form-group">
                    <label>CPF</label>
                    <input type="text" class="form-control" v-model="cliente.cpf" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                cliente: {
                    nome: '',
                    email: '',
                    telefone: '',
                    cnpj:'',
                    cpf: ''
                }
            }
        },
        created(){
            const url = `https://cadastro-backend-app.herokuapp.com/clientes/edit/${this.$route.params.id}`
            axios.get(url)
            .then((res) =>{
                console.log(res.data)
                this.cliente = res.data;
            }).catch(err => console.log(err));
        },
        methods: {
            editar(){
                  if(this.cliente.cpf === ''){
                    this.cliente.cpf = 'Não Informado'
                    }else if(this.cliente.cnpj === ''){
                        this.cliente.cnpj = 'Não Informado'
                    }
                axios.patch(`https://cadastro-backend-app.herokuapp.com/clientes/${this.$route.params.id}`, {
                    data: this.cliente
                }).then((res) =>{
                    console.log(res);
                    this.$router.push("/tabela")
                }).catch(err => console.log(err));
            }
        }
    }
</script>