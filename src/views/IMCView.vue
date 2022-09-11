<template>
    <main>
        <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Calculadora de IMC</h1>
        <div class="grid-container">
            <div class="grid-row grid-info">
                <p style="margin-left: 20px;">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                    <br>
                    <br>
                    O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado.
                </p>
            </div>
            <div class="menu-inputs">
                <div class="box-genero">
                    <span style="color: #878787;">Selecione seu sexo</span>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexo" value="masculino" id="radioMasculino" v-model="sexo" required>
                        <label class="form-check-label" for="radioMasculino">
                            Masculino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexo" value="feminino" id="radioFeminino" v-model="sexo" required>
                        <label class="form-check-label" for="radioFeminino">
                            Feminino
                        </label>
                    </div>
                </div>
                <div class="input-group">
                    <input type="number" id="coefA" class="form-control" maxlength="2" @input="verificarMaximo($event.target)" placeholder=" " v-model="idade">
                    <label for="coefA">Idade</label>
                </div>
                <div class="input-group">
                    <input type="number" id="coefB" class="form-control" maxlength="3" @input="verificarMaximo($event.target)" placeholder=" " v-model="altura">
                    <label for="coefB">Altura (cm)</label>
                </div>
                <div class="input-group">
                    <vue-mask 
                    class="form-control"
                    id="coefC"
                    maxlength="3" 
                    @input="verificarMaximo($event.target)" 
                    placeholder=" " 
                    v-model="massa"
                    mask="0.00" 
                    :raw="false"> 
                </vue-mask>
                <label for="coefC">Massa (kg)</label>
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
    <table class="table-calc">
        <span class="table-header">Tabela IMC</span>
        <tbody>
            <tr>
                <td>IMC</td>
                <td>Classificação</td>
                <td style="text-align: center">Obesidade <small>(grau)</small></td>
            </tr>
            
            <tr id="magreza">
                <td>Menor que 18,5</td>
                <td>Magreza</td>
                <td style="text-align: center">0</td>
            </tr>
            
            <tr>
                <td>Entre 18,5 e 24,9</td>
                <td>Normal</td>
                <td style="text-align: center">0</td>
            </tr>
            
            <tr>
                <td>Entre 25,0 e 29,9</td>
                <td>Sobrepeso</td>
                <td style="text-align: center">I</td>
            </tr>
            
            <tr>
                <td>Entre 30,0 e 39,9</td>
                <td>Obesidade</td>
                <td style="text-align: center">II</td>
            </tr>
            
            <tr>
                <td>Maior que 40,0</td>
                <td>Obesidade Grave</td>
                <td style="text-align: center">III</td>
            </tr>
        </tbody>
        
    </table>
    <br>
</main>
</template>


<script>
    import vueMask from 'vue-jquery-mask';
    export default {
        name: "IMCView",
        components: {
            vueMask
        },
        data: () => {
            return {
                altura: "",
                massa: "",
                idade: "",
                sexo: "",
                erro: false,
                erroMsg: []
            }
        },
        methods: {
            verificarMaximo(e) {
                if (e.value.length > e.maxLength) e.value = e.value.slice(0, e.maxLength);
            },
            calcular () {
                this.erro = false;
                this.erroMsg.length = 0;
                if(this.altura === "")
                {
                    this.erro = true;
                    this.erroMsg.push("Digite uma altura.");
                }
                if(this.massa === "")
                {
                    this.erro = true;
                    this.erroMsg.push("Digite uma massa.");
                }
                if(this.idade === "")
                {
                    this.erro = true;
                    this.erroMsg.push("Digite uma idade.");
                }
                if(this.sexo === "")
                {
                    this.erro = true;
                    this.erroMsg.push("Selecione seu sexo.");
                }
            }
        },
        beforeCreate: () => {
            document.title = "Calculadora de IMC | MultiCalc";
        }
    }
</script>

<style scoped>
    .grid-info > p::first-letter
    {
        font-weight: 300;
        font-size: 28px;
        font-family: 'Times New Roman', Times, serif;
    }
    .text-center
    {
        font-weight: bolder;
    }
    .box-genero
    {
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        margin-bottom: 10px;
        padding: 10px;
    }
    .form-floating > label
    {
        color: #878787;
    }
    .botaoEnviar
    {
        width: 100%;
    }
    .grid-container
    {
        display: grid; 
        grid-template: "a a";
        grid-gap: 50px;
        margin: 20px auto;
        align-items: center;
        justify-content: center;
    }
    .grid-row > p
    {
        font-size: 16px;
        text-align: left;
        white-space: inherit;
    }
    .grid-info
    {
        background: #fcfc9d;
        border-radius: 16px;
        padding: 20px;
    }
    .grid-row
    {
        width: 400px;
    }
    #magreza
    {
        background-color: #878787;
    }
    @media only screen and (max-width: 900px)
    {
        .grid-container
        {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            align-items: center;
        }
        .grid-row > *
        {
            display: block;
            margin: auto;
        }
    }
</style>