<template>
  <nav class="navbar">
    <div class="container-navbar">
      <a class="navbar-brand" href="#">
        <img src="/assets/imagens/logo.svg" alt="" width="128" class="mx-2">
      </a>
      <a href="#!" @click="ativarNavbarMobile()" class="navbar-wrapper">
        <img src="/assets/imagens/cardapio.png" width="32">
      </a>
    </div>
    <ul class="navbar-nav" id="navbar-items">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Página Inicial</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/calcbhaskara" class="nav-link">Calculadora de Bhaskara</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/calcimc" class="nav-link">Calculadora de IMC</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/calcbin" class="nav-link">Converter Decimal para Binário</router-link>
      </li>
    </ul>
  </nav>
  
</template>

<script>
  export default {
    name: 'navbarComponent',
    data: () => {
      return {
        ativado: false
      }
    },
    methods: {
      ativarNavbarMobile()
      {
        if(this.ativado == false)
        {
          document.getElementById("navbar-items").classList.add("ativo");
        }
        else
        {
          document.getElementById("navbar-items").classList.remove("ativo");
        }
        this.ativado = !this.ativado;
      }
    }
  }
</script>

<style lang="scss">
  a
  {
    text-decoration: none;
    color: #000;
  }
  .navbar
  {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: transparent;
  }
  
  .navbar-brand
  {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  
  .navbar ul li a
  {
    padding: 10px;
  }
  
  .navbar ul
  {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
  }
  
  .navbar ul li
  {
    padding: 10px;
  }
  
  .nav-item
  {
    background-color: #CECECE;
  }
  
  .nav-item:not(:first-child)
  {
    margin-left: 10px;
  }
  
  .nav-item:has(> .nav-link.router-link-exact-active)
  {
    background-color: #b4b4b4;
  }
  
  .nav-link
  {
    text-decoration: none;
  }
  
  .navbar-wrapper
  {
    display: none;
  }
  
  @media only screen and (max-width: 968px)
  {
    .navbar
    {
      justify-content: space-between!important;
      flex-wrap: nowrap!important;
      display: block;
    }
    .navbar-nav:not(.ativo)
    {
      display: none;
    }
    .container-navbar
    {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .navbar-wrapper
    {
      display: inherit;
      margin-right: 12px;
    }
    .navbar-nav.ativo
    {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
    }
    .nav-item
    {
      margin: 2px 0!important;
    }
  }
  
</style>