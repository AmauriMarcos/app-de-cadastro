<template>
    <div class="row">
        <div class="col-md-12 ">   
            
            <div class="search">
                <input @keyup.enter.prevent="search()" v-model='nomePesquisado' class="form-control mb-3" type="text"  placeholder="Pesquisar" aria-label="Search"/>
            </div>

            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Nome completo</th>
                        <th>Email</th>
                        <th>telefone</th>
                        <th>CNPJ</th>
                        <th>CPF</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in clientes" :key="cliente._id">
                        <td>{{ cliente.nome }}</td>
                        <td>{{ cliente.email }}</td>
                        <td>{{ cliente.telefone }}</td>
                        <td>{{ cliente.cnpj }}</td>
                        <td>{{ cliente.cpf }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: cliente._id }}" class="btn btn-success">Editar
                            </router-link>
                            <button @click.prevent="removerCliente(cliente._id)" class="btn btn-danger">Remover</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                clientes: [],
                nomePesquisado:''
            }
        },
        created() {
            let apiURL = 'https://cadastro-backend-app.herokuapp.com/clientes/';
            axios.get(apiURL).then(res => {
                this.clientes = res.data;
                console.log(this.clientes);
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            removerCliente(id){
                const apiURL = `https://cadastro-backend-app.herokuapp.com/clientes/${id}`;
                const indexOfArrayItem = this.clientes.findIndex(i => i._id === id);

                if (window.confirm("Tem certeza que deseja remover este item?")) {
                    axios.delete(apiURL).then(() => {
                        this.clientes.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
            search(){
                this.$router.push(`results/${this.nomePesquisado}`);
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }

    .search{
        width: 70%;
        margin: 0 auto;
    }
</style>