<template>
  <nav class="navbar">
    <a class="navbar-brand" href="#">
      <img src="/assets/imagens/logo.svg" alt="" width="128" class="mx-2">
    </a>
    <ul class="navbar-nav">
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
    name: 'navbarComponent'
  }
</script>

<style lang="scss">
  .navbar
  {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f5f5f5;
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
  
  @media only screen and (max-width: 1132px)
  {
    .nav-item:not(:first-child)
    {
      margin-top: 10px;
    }
  }
  .nav-item {
    .nav-link {
      color: #000;
    }
  }
  
  @media only screen and (max-width: 800px)
  {
    .navbar
    {
      display: block;
      padding-bottom: 10px;
    }
    .navbar ul
    {
      display: block;
    }
    .nav-item
    {
      width: 100%;
      margin-left: 0!important;
    }
    
    .nav-item:has(> .nav-link.router-link-exact-active)
    {
      background-color: #b4b4b4;
    }
  }  
  
</style>