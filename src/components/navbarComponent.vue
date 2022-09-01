<template>
  <nav class="navbar navbar-expand-lg bg-light text-center">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/assets/imagens/calculadora-icon.png" alt="" width="64" class="d-inline-block">
        <span style="font-size: 16px;">Calculadora de Bhaskara</span>
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
      width: 200px;

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