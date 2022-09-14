<template>
    <main>
        <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Converter decimal para binário</h1>
        <h4 class="text-center">Para começar a utilizar a nossa ferramenta, digite um número binário e clique/aperte em 'Calcular'.</h4>
        <div class="escolher-tipo">
            <span>Escolha a forma de calcular</span>
            <div class="menu-escolher">
                <input type="radio" id="dec2bin" class="form-control" name="tipo" checked="checked" @change="atualizarTipo()">
                <label class="form-check-label" for="dec2bin">Decimal para binário</label>
            </div>
            <div class="menu-escolher">
                <input type="radio" id="bin2dec" class="form-control" name="tipo" @change="atualizarTipo()">
                <label class="form-check-label" for="bin2dec">Binário para decimal</label>
            </div>
        </div>
        <div class="container">
            <div class="menu-inputs" v-if="tipo == 'dec2bin'">
                <div class="input-group">
                    <input type="number" id="numdecimal" class="menu-input form-control" @input="[verificarMaximo($event.target), atualizarDecimal($event.target)]" maxlength="8" placeholder=" " v-model="numdecimal">
                    <label for="numdecimal">Numero decimal</label>
                </div>
                <button type="submit" class="botaoEnviar" @click="calcular()">Calcular</button>
            </div>
            <div class="menu-inputs" v-else>
                <div class="input-group">
                    <input type="number" id="numbinario" class="menu-input form-control" @input="[verificarMaximo($event.target), atualizarBinario($event.target)]" maxlength="8" placeholder=" " v-model="numbinario">
                    <label for="numbinario">Numero binário</label>
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
    import $ from "jquery";
    export default {
        data() {
            return {
                calculado: false,
                resultado: "",
                erroMsg: [],
                erro: false,
                tipo: "dec2bin",
                numdecimal: "",
                numbinario: ""
            }
        },
        beforeCreate: () => {
            document.title = "Converter decimais e binarios | MultiCalc";
        },
        methods: {
            atualizarTipo() {
                this.tipo = $('input[name=tipo]:checked').attr("id");
            },
            verificarMaximo(e) {
                if (e.value.length > e.maxLength+1) e.value = e.value.slice(0, e.maxLength+1);
            },
            atualizarDecimal(e)
            {
                this.numdecimal = e.value;
            },
            atualizarBinario(e)
            {
                this.numbinario = e.value;
            },
            calcular: function () {
                console.log($('input[name=tipo]:checked').attr("id"))
                this.calculado = true;
                this.erro = false;
                this.erroMsg.length = 0;
                
                function dec2bin(dec)
                {
                    return (dec >>> 0).toString(2);
                }
                if(this.tipo == "dec2bin")
                {
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
                    let numero = dec2bin(this.numdecimal);
                    this.resultado = numero;
                }
                else
                {
                    if(this.numbinario === "")
                    {
                        this.erroMsg.push("Digite um valor para o binário!");
                        this.erro = true;
                        this.calculado = false;
                        return true;
                    }
                    else if(this.numbinario < 0)
                    {
                        this.erroMsg.push("O número binário não pode ser menor que 0!");
                        this.erro = true;
                        this.calculado = false;
                        return true; 
                    }
                    this.resultado = parseInt(this.numbinario, 2);
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
    .menu-escolher:last-child
    {
        margin-top: 10px;
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
        display: table;
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
    
</style>