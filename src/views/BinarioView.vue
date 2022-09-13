<template>
    <main>
        <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Converter decimal para binário</h1>
        <h4 class="text-center">Para começar a utilizar a nossa ferramenta, digite um número binário e clique/aperte em 'Calcular'.</h4>
        <div class="container mx-auto">
            <div class="menu-inputs">
                <div class="input-group">
                    <input type="number" id="numdecimal" class="menu-input form-control" @input="verificarMaximo($event.target)" maxlength="4" placeholder=" " v-model="numdecimal">
                    <label for="numdecimal">Numero decimal</label>
                </div>
                <button type="submit" class="botaoEnviar" @click="calcular()">Calcular</button>
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
                    <span>{{ resultado }}</span>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                calculado: false,
                resultado: "",
                erroMsg: [],
                erro: false
            }
        },
        beforeCreate: () => {
            document.title = "Converter decimal para binário | MultiCalc";
        },
        methods: {
            
            verificarMaximo(e) {
                if (e.value.length > e.maxLength+1) e.value = e.value.slice(0, e.maxLength+1);
            },
            calcular: function () {
                this.calculado = true;
                this.erro = false;
                this.erroMsg.length = 0;
                if(this.numdecimal === "")
                {
                    this.erroMsg.push("Digite um valor para o decimal!");
                    this.erro = true;
                    this.calculado = false;
                    return true;
                }
                else if(this.numdecimal < 0)
                {
                    this.erroMsg.push("O número decimal não pode ser menor que 0!");
                    this.erro = true;
                    this.calculado = false;
                    return true; 
                }
                function dec2bin(dec){
                    return (dec >>> 0).toString(2);
                }
                let numero = dec2bin(this.numdecimal);
                this.resultado = numero;
            }
        }
    }
</script>

<style scoped>
    .formula-container > span
    {
        font-size: 21px;
    }
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
    
    
    .menu-input
    {
        margin-bottom: 10px;
    }
    
    .menu-inputs
    {
        display: table;
        margin: auto;
        width: 250px;
    }
    
    .container
    {
        display: block;
        margin: auto;
    }
    
    .mx-auto
    {
        margin: 0 auto!important;
    }

    .resultado-container > span
    {
        font-size: 32px;
        letter-spacing: 4px;
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
    .box-bhaskara
    {
        width: 450px;
    }
    .formula-container
    {
        background-color: #fcfc9d;
        padding: 10px;
    }

    @media only screen and (max-width: 768px)
    {
        .input-group > *
        {
            width: 300px;
        }
    }
</style>