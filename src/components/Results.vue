<template>
    <div class="row">
        <div class="col-md-12 ">   
            
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
    data(){
        return{
            clientes: []
        }
    },
    created(){
        axios.get(`http://localhost:3000/clientes/${this.$route.params.id}`)
        .then((res) =>{
            this.clientes= res.data;
            console.log(this.clientes)
        }).catch(err => console.log(err));
    }
}
</script>
<style>

</style>