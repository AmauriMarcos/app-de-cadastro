<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
           
            <h3 class="text-center">Formulário de Cadastro</h3>
            <form method="POST" @submit.prevent="submitForm">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" v-model="cliente.nome" required>
                </div>

                <div class="form-group">
                    <label>Sobrenome</label>
                    <input type="text" class="form-control" v-model="cliente.sobrenome" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="cliente.email" required>
                </div>

                <div class="form-group">
                    <label>Telefone</label>
                    <input type="text" class="form-control" v-model="cliente.telefone" required>
                </div>

                <div class="box-juridico">
                    <p>Pessoa Jurídica?</p>
                    <div class="opcoes">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="pessoaJuridica" class="custom-control-input" id="customCheck1" >
                            <label class="custom-control-label" for="customCheck1">Sim</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox"  v-model="pessoaNaoJuridica" class="custom-control-input" id="customCheck2" >
                            <label class="custom-control-label" for="customCheck2">Não</label>
                        </div>
                    </div>    
                </div>

                <div class="form-group" v-if="pessoaNaoJuridica">
                    <label>CPF</label>
                    <input type="text" class="form-control" v-model="cliente.cpf" required>
                </div>

                <div class="form-group" v-if="pessoaJuridica">
                    <label>CNPJ</label>
                    <input type="text" class="form-control" v-model="cliente.cnpj" required>
                </div>
                
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Cadastrar</button>
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
                   sobrenome: '',
                   email: '',
                   telefone: '',
                    cpf: '',
                    cnpj: '' 
                },
                pessoaJuridica: false,
                pessoaNaoJuridica: false
            }
        },
        watch:{
            pessoaJuridica(){
                if(this.pessoaJuridica){
                    this.pessoaNaoJuridica = false
                }
            },
            pessoaNaoJuridica(){
                if(this.pessoaNaoJuridica){
                    this.pessoaJuridica = false
                }
            }
        },
        methods: {
            submitForm(){
               
                if(this.cliente.cpf === ''){
                    this.cliente.cpf = 'Não Informado'
                }else if(this.cliente.cnpj === ''){
                    this.cliente.cnpj = 'Não Informado'
                }

                axios.post('https://cadastro-backend-app.herokuapp.com/clientes', {
                    data: this.cliente
                }).then(function(){     
                    
                    this.cliente = {
                        nome: '',
                        sobrenome: '',
                        email: '',
                        telefone: '',
                        cnpj: '',
                        cpf: ''
                    }                 

                }).catch(function (error) {
                    console.log(error);
                });

                 window.location.href="/tabela";
                /* this.$router.push("/tabela");  */
                                 
            }
        }
    }
</script>

<style>
    .opcoes{
        display: flex;
    }

    .custom-control-label{
        margin-right: 1rem;
    }

    .box-juridico{
        margin-bottom: 1.5rem;
    }
</style>