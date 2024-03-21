<template>
  <div class="home">
    <div class="px-4 py-5 my-5 text-center">
      <img
        class="d-block mx-auto mb-4"
        src="../src/assets/logo.png"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="display-5 fw-bold text-body-emphasis">Seja bem vindo(a)!</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
            Transforme vendas em sucesso com nosso portal de gerenciamento
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
            <RouterLink type="button" class="btn btn-primary btn-lg px-4 gap-3" to="/customers/create">Cadastrar Cliente</RouterLink>
            <RouterLink type="button" class="btn btn-outline-secondary btn-lg px-4" to="/customers">Visualizar Cliente</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHome",
};
</script>
