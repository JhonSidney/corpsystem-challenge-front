<template>
    <div class="container mt-5">
      <h2>Formulário de Cadastro</h2>
      <form id="customers-create-form" @submit="createCustomers">
        <div class="input-container">
          <label for="first_name">Primeiro Nome:</label>
          <input type="text" id="first_name" placeholder="Ex:ALVARO" v-model="first_name" >
        </div>
        <div  class="input-container">
          <label for="last_name">Sobrenome:</label>
          <input type="text" id="last_name" placeholder="Ex.CESAR"  v-model="last_name" >
        </div>
        <div class="input-container">
          <label for="address">Endereço:</label>
          <input type="text" id="address" placeholder="RUA ANGELINA, N222, QUADRA" v-model="address" >
        </div>
        <div class="input-container">
          <label for="email">Email:</label>
          <input type="email" placeholder="usuario@example.com" id="email" v-model="email" >
        </div>
        <div class="input-container">
          <label for="phone">Telefone:</label>
          <input type="tel" id="phone" placeholder="+55 (11) 9999-9999" v-model="phone" >
        </div>
        <div class="input-container">
          <label for="occupation">Ocupação:</label>
          <input type="text" id="occupation" placeholder="profissao" v-model="occupation" >
        </div>
        <div class="input-container">
          <label for="date_of_birth">Data de Nascimento:</label>
          <input type="text" id="date_of_birth" placeholder="ANO-MẼS-DIA" v-model="date_of_birth" >
        </div>


        <div class="input-container">
          <input type="submit" class="submit-btn" value="CRIAR NOVO CLIENTE">
        </div>

      </form>
    </div>
</template>
  
<script>
  import axios from 'axios'; 

  export default {
    name: "AppCustomersForm",

    data() {
      return {
        first_name: "",
        last_name: "",
        address: "",
        email: "",
        phone: "",
        occupation: "",
        date_of_birth: "",
      };
    },

    methods: {
      async createCustomers() {

        const data = {
          first_name: this.first_name,
          last_name: this.last_name,
          address: this.address,
          email: this.email,
          phone: this.phone,
          occupation: this.occupation,
          date_of_birth: this.date_of_birth,
        };

        const jsonData = JSON.stringify(data);
        console.log(jsonData)

        try {
            
            const response = await axios.post('http://127.0.0.1:8000/api/v1/customers/create/', jsonData);
            console.log(response)
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
          console.error('Erro ao enviar dados:', error);
        }
      }
    }
  };
</script>


  
<style scoped>
    #customers-create-form{
        max-width: 400px;
        margin:0 auto;
        }
            
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    
    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: rgb(2, 2, 2);
        padding: 5px 10px;
        border-left: 4px solid blue;
    }

    .submit-btn{
        background-color: black;
        color: rgb(129, 137, 204);
        font-weight: bold;
        border: 2px solid rgb(113, 113, 113);
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
        width: 350px;
        border-radius: 10px;
    }

    .submit-btn:hover{
        background-color:transparent;

    }
</style>
  