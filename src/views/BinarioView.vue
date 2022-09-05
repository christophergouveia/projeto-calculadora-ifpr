<template>
    <main>
        <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Converter decimal para binário</h1>
        <h4 class="text-center">Para começar a utilizar a nossa ferramenta, digite um número binário e clique/aperte em 'Calcular'.</h4>
        <div class="container mx-auto">
            <div class="menu-inputs">
                <div class="menu-inputs-2">
                    <div class="form-floating">
                        <input type="number" id="coefA" class="menu-input form-control" @input="verificarMaximo($event.target)" maxlength="8" placeholder="Número binário" v-model="binario" required>
                        <label for="coefA">Número Binário</label>
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
                    <h1>{{ resultado }}</h1>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                binario: 0,
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
                if (e.value.length > e.maxLength) e.value = e.value.slice(0, e.maxLength);
            },
            calcular: function () {
                this.calculado = true;
                this.erro = false;
                this.erroMsg.length = 0;
                if(this.binario === "")
                {
                    this.erroMsg.push("Digite um valor para o binário!");
                    this.erro = true;
                    this.calculado = false;
                    return true;
                }
                else if(this.binario < 0)
                {
                    this.erroMsg.push("O número binário não pode ser menor que 0!");
                    this.erro = true;
                    this.calculado = false;
                    return true; 
                }
                function dec2bin(dec){
                    return (dec >>> 0).toString(2);
                }
                let numero = dec2bin(this.binario);
                this.resultado = numero;
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
            width: 40%;
        }
    }
</style>