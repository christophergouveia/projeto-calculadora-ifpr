<template>
  <main class="p-2">
    <h1 class="text-center">Olá, seja bem-vindo à calculadora de bhaskara!</h1>
    <h4 class="text-center">Para começar a utilizar a nossa ferramenta, digite uma função e clique/aperte em 'Calcular'.</h4>
    <div class="menu-inputs mx-auto">
      <div class="menu-inputs-2">
        <div class="form-floating">
          <input type="number" id="coefA" class="menu-input form-control">
          <label for="coefA">Coeficiente A</label>
        </div>
        <div class="form-floating">
          <input type="number" id="coefB" class="menu-input form-control">
          <label for="coefB">Coeficiente B</label>
        </div>
        <div class="form-floating">
          <input type="number" id="coefC" class="menu-input form-control">
          <label for="coefC">Coeficiente C</label>
        </div>
        <button type="submit" class="btn btn-outline-success botaoEnviar">Enviar</button>
      </div>
    </div>
  </main>
</template>

<script>

  export default {
    name: 'PaginaInicial'
  }
</script>

<style scoped>
  .botaoEnviar
  {
    width: 100%;
  }
  .menu-inputs
  {
    width: 250px;
  }
  .menu-input
  {
    margin-bottom: 10px;
  }
</style>