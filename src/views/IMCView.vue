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
            <div class="grid-row">
                <div class="menu-inputs">
                    <div class="menu-inputs-2">
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
                        <div class="form-floating">
                            <input type="number" id="coefA" class="menu-input form-control virgula" maxlength="4" placeholder="Idade" v-model="idade">
                            <label for="coefA">Idade</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" id="coefB" class="menu-input form-control virgula" maxlength="4" placeholder="Altura" v-model="altura">
                            <label for="coefB">Altura (cm)</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" id="coefC" class="menu-input form-control virgula" maxlength="4" placeholder="Massa" v-model="massa">
                            <label for="coefC">Massa (kg)</label>
                        </div>
                        <button type="submit" class="btn btn-outline-success botaoEnviar" @click="calcular()">Calcular</button>
                    </div>
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
    </main>
</template>


<script>
    export default {
        name: "IMCView",
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
    .menu-inputs
    {
        width: 250px;
    }
    .menu-input
    {
        margin-bottom: 10px;
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
        margin: 0 auto;
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
            justify-content: center;
            margin: 0 auto;
            align-items: center;
        }
    }
</style>