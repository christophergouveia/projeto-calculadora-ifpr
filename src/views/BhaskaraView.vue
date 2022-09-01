<template>
  <main>
    <h1 class="mt-2 text-center" style="color: #3352ff; font-weight: bolder;">Calculadora de Bhaskara</h1>
    <h4 class="text-center">Para começar a utilizar a nossa ferramenta, digite os coeficientes e clique/aperte em 'Calcular'.</h4>
    <div class="menu-obs rounded">
      <h1>Observações</h1>
      <ul>
        <li>
          <span>Para introduzir frações em algum dos coeficientes, terá que introduzir na forma decimal. Por exemplo, para introduzir <vue-mathjax formula="$\frac14$"></vue-mathjax> deverá colocar 0.25</span>
        </li>
        <li>
          <span>Quando o coeficiente A for igual a 0, por padrão será considerado A igual a 1.</span>  
        </li>
        <li>
          <span>Números decimais não serão representados com todas as casas decimais, somente 2 casas após a vírgula.</span>  
        </li>
      </ul>
    </div>
    <div class="container mx-auto">
      <div class="box-bhaskara rounded">
        <img src="/assets/imagens/formula.jpg">
      </div>
      <div class="menu-inputs">
        <div class="menu-inputs-2">
          <div class="form-floating">
            <input type="number" id="coefA" class="menu-input form-control" @input="verificarMaximo($event.target)" maxlength="4" placeholder="Coeficiente A" v-model="coefA">
            <label for="coefA">Coeficiente A</label>
          </div>
          <div class="form-floating">
            <input type="number" id="coefB" class="menu-input form-control" @input="verificarMaximo($event.target)" maxlength="4" placeholder="Coeficiente B" v-model="coefB">
            <label for="coefB">Coeficiente B</label>
          </div>
          <div class="form-floating">
            <input type="number" id="coefC" class="menu-input form-control" @input="verificarMaximo($event.target)" maxlength="4" placeholder="Coeficiente C" v-model="coefC">
            <label for="coefC">Coeficiente C</label>
          </div>
          <button type="submit" class="btn btn-outline-success botaoEnviar" @click="calcular()" onclick="location.href = '#resultado-scroll'">Calcular</button>
        </div>
      </div>
    </div>
    <div class="alert alert-danger mt-2 mx-auto w-50" role="alert" v-if="erro">
      <ul style="list-style-type: square; margin: 0; padding: auto auto auto 2px;">
        <li v-for="msg in erroMsg" :key="msg">
          {{ msg }}
        </li>
      </ul>
    </div>
    <br>
    <div class="container-resultado" v-if="calculado == true">
      <div class="container-resultado-text">
        <div class="resultado-container">
          <div class="formula-container">
            <span>Fórmula de Bhaskara: </span>
            <br>
            <vue-mathjax formula="$x = {-(b) \pm \sqrt{\Delta} \over 2a}$"></vue-mathjax>
            <br>
            <vue-mathjax formula="$\Delta = {b^2-4.a.c}$"></vue-mathjax>
          </div>
          <hr>
          <strong><span id="resultado-scroll" style="font-size: 18px; margin-top: 4px;">Resolução passo a passo</span></strong>
          <br>
          <vue-mathjax :formula="formulaDelta"></vue-mathjax>
          <br>
          <vue-mathjax :formula="resultadoDelta"></vue-mathjax>
          <br>
          <vue-mathjax :formula="formulaX"></vue-mathjax>
          <br>
          <div v-if="erroRaiz == false || erroRaiz == null">
            <vue-mathjax :formula="resultadoX"></vue-mathjax>
            <br>
            <vue-mathjax :formula="formulaX1"></vue-mathjax>
            <br>
            <vue-mathjax :formula="resultadoX1" style="color: #0c9100;"></vue-mathjax>
            <br>
            <vue-mathjax :formula="formulaX2" v-if="raiz2"></vue-mathjax>
            <br>
            <vue-mathjax :formula="resultadoX2" style="color: #0c9100;" v-if="raiz2"></vue-mathjax>
          </div>
          <div v-else>
            <h3>Delta negativo. Não há resolução.</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { VueMathjax } from 'vue-mathjax-next'
  import {sum, subtract} from "mathjs";
  export default {
    components: {
      'vue-mathjax': VueMathjax
    },
    data() {
      return {
        coefA: "",
        coefB: "",
        coefC: "",
        calculado: false,
        erro: false,
        erroMsg: [],
        erroRaiz: false,
        resultado: "",
        raiz2: false
      }
    },
    methods: { 
      verificarMaximo(e) {
        if (e.value.length > e.maxLength) e.value = e.value.slice(0, e.maxLength);
      },
      calcular() {
        this.erroMsg.length = 0;
        let coefAv = document.getElementById("coefA").value;
        let coefBv = document.getElementById("coefB").value;
        let coefCv = document.getElementById("coefC").value;
        this.raiz2 = false;
        if(coefAv.trim() === "")
        {
          this.erroMsg.push("Digite um valor para o coeficiente A.");
          this.erro = true;
        }
        if(coefBv.trim() === "")
        {
          this.erroMsg.push("Digite um valor para o coeficiente B.");
          this.erro = true;
        }
        if(coefCv.trim() === "")
        {
          this.erroMsg.push("Digite um valor para o coeficiente C.");
          this.erro = true;
        }
        if(coefAv.trim() != "" && coefBv.trim() != "" && coefCv.trim() != "")
        {
          this.erro = false;
        }
        if(this.erro != true)
        {
          this.calculado = true;
          this.coefA = coefAv;
          this.coefB = coefBv;
          this.coefC = coefCv;
          if(this.coefA == 0)
          {
            this.coefA = 1;
          }
          this.erroRaiz = false;
          this.formulaDelta = `$\\Delta = {${this.coefB}^2-4.${this.coefA}.${this.coefC}}$`;
          let _tempCalc, _tempCalc2, _tempCalc3;
          _tempCalc = (Math.pow(this.coefB, 2))-4*this.coefA*this.coefC;
          this.resultadoDelta = `$\\Delta = ${_tempCalc}$`;
          this.formulaX = `$$x = {-(${this.coefB}) \\pm \\sqrt{${_tempCalc}} \\over 2.${this.coefA}}$$`;
          if(_tempCalc < 0)
          {
            this.erroRaiz = true;
            return true;
          }
          if(_tempCalc > 0)
          {
            this.raiz2 = true;
          }
          _tempCalc2 = Math.sqrt(_tempCalc).toPrecision(3);
          _tempCalc3 = 2*this.coefA;
          coefBv = this.coefB*-1;
          this.resultadoX = `$$x = {${coefBv} \\pm {${_tempCalc2}} \\over ${_tempCalc3}}$$`;
          //
          this.formulaX1 = `$$x_1 = {${coefBv}+${_tempCalc2}\\over ${_tempCalc3}}$$`;
          _tempCalc = sum(coefBv, _tempCalc2).toPrecision(3);
          this.resultadoX1 = `$$x_1 = ${(_tempCalc/_tempCalc3).toPrecision(3)}$$`;
          //
          this.formulaX2 = `$$x_2 = {${coefBv}-${_tempCalc2}\\over ${_tempCalc3}}$$`;
          _tempCalc = subtract(coefBv, _tempCalc2).toPrecision(3);
          this.resultadoX2 = `$$x_2 = ${(_tempCalc/_tempCalc3).toPrecision(3)}$$`;
        }
      }
    }
  }
</script>

<style scoped>
  .alert
  {
    margin-top: 20px !important;
  }
  hr
  {
    background-color: #000;
    height: 2px;
    opacity: 1;
  }
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
  
  .container
  {
    display: grid; 
    grid-template: "a a";
    justify-content: center;
    grid-gap: 50px;
  }
  
  .container-resultado
  {
    width: 60%;
    text-align: center;
    padding: 10px;
    height: fit-content;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 15px;
    background-color: rgba(204, 252, 210, 1);
  }
  .container-resultado-text
  {
    text-align: center;
    font-size: 16px;
  }
  .form-floating > label
  {
    color: #878787;
  }
  .menu-obs
  {
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    background: #fcfc9d;
    width: fit-content;
    padding: 10px;
    opacity: 0.7;
    text-align: center;
    margin-bottom: 20px;
  }
  .menu-obs > ul > li
  {
    text-align: left;
  }
  .selecionareq
  {
    border: 1px solid #BEBEBE;
    width: fit-content;
    margin: auto;
    padding: 10px;
  }
  .text-center::selection
  {
    background-color: black;
  }
  .box-bhaskara
  {
    width: 450px;
  }
  .formula-container
  {
    background-color: #fcfc9d;
    padding: 10px;
  }
  @media only screen and (max-width: 968px)
  {
    .container
    {
      display: block;
    }
    .container > *
    {
      margin: auto;
    }
    
    .box-bhaskara
    {
      width: 300px;
    }
  }
</style>