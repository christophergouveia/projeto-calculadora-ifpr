<template>
    <main>
        <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Calculadora de porcentagem</h1>
        <div class="escolher-tipo">
            <span>Escolha a forma que iremos calcular</span>
            <div class="menu-escolher">
                <input type="radio" id="adicao" class="form-control" name="tipo" checked="checked" @change="atualizarTipo()">
                <label class="form-check-label" for="adicao">Aumento</label>
            </div>
            <div class="menu-escolher">
                <input type="radio" id="subtracao" class="form-control" name="tipo" @change="atualizarTipo()">
                <label class="form-check-label" for="subtracao">Desconto</label>
            </div>
            <div class="menu-escolher">
                <input type="radio" id="multiplicacao" class="form-control" name="tipo" @change="atualizarTipo()">
                <label class="form-check-label" for="multiplicacao">Mutiplicação</label>
            </div>
            <div class="menu-escolher">
                <input type="radio" id="divisao" class="form-control" name="tipo" @change="atualizarTipo()">
                <label class="form-check-label" for="divisao">Divisão</label>
            </div>
        </div>
        <div class="container">
            <div class="menu-inputs">
                <div class="input-group">
                    <input type="number" id="numero" class="menu-input form-control" @input="[verificarMaximo($event.target), atualizarNumero($event.target)]" maxlength="7" placeholder=" " v-model="numero">
                    <label for="numero">Numero</label>
                </div>
                <div class="input-group">
                    <input type="number" id="porcentagem" class="menu-input form-control" @input="[verificarMaximo($event.target), atualizarPorcentagem($event.target)]" maxlength="7" placeholder=" " v-model="porcentagem">
                    <label for="porcentagem">Porcentagem</label>
                </div>
                <button type="submit" class="botaoEnviar" @click="calcular()">Calcular</button>
            </div>
        </div>
        <div class="alerta-erro" role="alert" v-if="erro">
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
    import $ from "jquery";
    export default {
        name: "PorcentagemView",
        data: () => {
            return {
                tipo: "adicao",
                numero: "",
                porcentagem: "",
                erro: false,
                erroMsg: [],
                calculado: false,
                resultado: ""
            }
        },
        methods: {
            atualizarTipo() {
                this.tipo = $('input[name=tipo]:checked').attr("id");
            },
            verificarMaximo(e) {
                if (e.value.length > e.maxLength) e.value = e.value.slice(0, e.maxLength);
            },
            atualizarNumero(e)
            {
                this.numero = e.value;
            },
            atualizarPorcentagem(e)
            {
                this.porcentagem = e.value;
            },
            calcular () {
                this.erroMsg.length = 0;
                this.erro = false;
                this.calculo = false;
                if(this.numero == "" || this.numero == 0)
                {
                    this.erro = true;
                    this.erroMsg.push("Digite um número válido!");
                }
                if(this.porcentagem == "" || this.porcentagem == 0)
                {
                    this.erro = true;
                    this.erroMsg.push("Digite uma porcentagem válida!");
                }
                if(this.erro == true)
                {
                    return true;
                }
                let calculo, calculo2;
                this.numero = document.getElementById("numero").value;
                switch(this.tipo)
                {
                    case "adicao":
                    {
                        calculo = (this.numero/100)*this.porcentagem;
                        calculo2 = parseInt(this.numero)+parseInt(calculo);
                        this.resultado = calculo2;
                        this.calculado = true;
                        return true;
                    }
                    case "subtracao":
                    {
                        calculo = (this.numero/100)*this.porcentagem;
                        calculo2 = parseInt(this.numero)-parseInt(calculo);
                        this.resultado = calculo2;
                        this.calculado = true;
                        return true;
                    }
                    case "divisao":
                    {
                        calculo = (this.numero/100)*this.porcentagem;
                        calculo2 = parseInt(this.numero)/parseInt(calculo);
                        this.resultado = calculo2;
                        this.calculado = true;
                        return true;
                    }
                    case "multiplicacao":
                    {
                        calculo = (this.numero/100)*this.porcentagem;
                        calculo2 = parseInt(this.numero)*parseInt(calculo);
                        this.resultado = calculo2;
                        this.calculado = true;
                        return true;
                    }
                }
            }
        }
    }
</script>


<style scoped>
    .escolher-tipo
    {
        border: 1px solid rgb(202, 216, 221);
        border-radius: 12px;
        width: fit-content;
        height: fit-content;
        padding: 10px;
        display: table;
        margin: auto;
    }
    .escolher-tipo span
    {
        display: block;
        color: #666;
        font-size: 18px;
        margin-bottom: 10px;
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
        width: 300px;
    }
    
    .menu-inputs
    {
        display: table;
        margin: auto;
    }
    
    .container
    {
        display: table;
        margin: auto;
    }
    
    .mx-auto
    {
        margin: 0 auto!important;
    }
    
    .resultado-container > span
    {
        overflow-wrap: break-word;
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
    
</style>