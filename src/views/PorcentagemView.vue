<template>
    <main>
        <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Calculadora de porcentagem</h1>
        <div class="escolher-tipo">
            <span>Escolha a forma que iremos calcular</span>
            <div class="menu-escolher">
                <input type="radio" id="adicao" class="form-control" name="tipo" checked="checked" @change="atualizarTipo()">
                <label class="form-check-label" for="adicao">Adição</label>
            </div>
            <div class="menu-escolher">
                <input type="radio" id="subtracao" class="form-control" name="tipo" @change="atualizarTipo()">
                <label class="form-check-label" for="subtracao">Subtração</label>
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
                    <input type="number" id="numero" class="menu-input form-control" @input="[verificarMaximo($event.target), atualizarDecimal($event.target)]" maxlength="7" placeholder=" " v-model="numero">
                    <label for="numero">Numero</label>
                </div>
                <div class="input-group">
                    <input type="number" id="Porcentagem" class="menu-input form-control" @input="[verificarMaximo($event.target), atualizarDecimal($event.target)]" maxlength="7" placeholder=" " v-model="Porcentagem">
                    <label for="porcentagem">Porcentagem</label>
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
        name: "PorcentagemView"
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