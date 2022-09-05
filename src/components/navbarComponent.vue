<template>
  <nav class="navbar navbar-expand-lg bg-light text-center">
    <div class="container-fluid">
      <a class="navbar-bran d-flex" href="#">
        <img src="/assets/imagens/logo.svg" alt="" width="128" class="mx-2">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav w-100">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Página Inicial</router-link>
          </li>
          <li class="nav-item desativado">
            <router-link to="/calcbhaskara" class="nav-link">Calculadora de Bhaskara</router-link>
          </li>
          <li class="nav-item desativado">
            <router-link to="/calcimc" class="nav-link">Calculadora de IMC</router-link>
          </li>
          <li class="nav-item desativado">
            <router-link to="/calcbin" class="nav-link">Converter Decimal para Binário</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'navbarComponent'
  }
</script>

<style lang="scss">
  @media only screen and (min-width: 768px)
  {
    .nav-item:not(:first-child)
    {
      margin-left: 10px;
    }
  }
  @media only screen and (max-width: 1132px)
  {
    .nav-item:not(:first-child)
    {
      margin-top: 10px;
    }
  }
  .nav-item.desativado
  {
    cursor: not-allowed;
  }
  .nav-item {
    .nav-link {
      background-color: #CECECE;
      border-radius: 3.2px;
      color: #000;
      width: 250px;

      &.router-link-exact-active {
        background-color: #adadad;
      }
    }
  }

  @media only screen and (max-width: 768px)
  {
    .nav-item > .nav-link
    {
      width: 100%;
    }
  }

</style>