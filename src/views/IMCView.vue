<template>
    <main>
        <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Calculadora de IMC</h1>
        <div class="grid-container">
            <div class="grid-row grid-info">
                <p style="margin-left: 20px;">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
                    Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                    <br>
                    <br>
                    O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao
                    quadrado.
                </p>
            </div>
            <div class="menu-inputs grid-row">
                <div class="input-group">
                    <vue-mask class="form-control" id="altura" maxlength="3" @input="verificarMaximo($event.target)"
                        placeholder=" " v-model="altura" mask="0.00" :raw="false">
                    </vue-mask>
                    <label for="altura">Altura (m)</label>
                </div>
                <div class="input-group">
                    <input class="form-control" type="number" id="massa" maxlength="3"
                        @input="verificarMaximo($event.target)" placeholder=" " v-model="massa">
                    <label for="massa">Massa (kg)</label>
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
        <div id="imc-container">
            <span>Seu IMC é de: </span><strong><span id="imc">--</span></strong>
        </div>
        <table class="table-calc" id="tabela">
            <span class="table-header">Tabela IMC</span>
            <tbody>
                <tr>
                    <td>IMC</td>
                    <td>Classificação</td>
                    <td style="text-align: center">Obesidade <small>(grau)</small></td>
                </tr>

                <tr class="tabela-dado" id="magreza">
                    <td>Menor que 18,5</td>
                    <td>Magreza</td>
                    <td style="text-align: center">0</td>
                </tr>

                <tr class="tabela-dado" id="normal">
                    <td>Entre 18,5 e 24,9</td>
                    <td>Normal</td>
                    <td style="text-align: center">0</td>
                </tr>

                <tr class="tabela-dado" id="sobrepeso">
                    <td>Entre 25,0 e 29,9</td>
                    <td>Sobrepeso</td>
                    <td style="text-align: center">I</td>
                </tr>

                <tr class="tabela-dado" id="obesidade">
                    <td>Entre 30,0 e 39,9</td>
                    <td>Obesidade</td>
                    <td style="text-align: center">II</td>
                </tr>

                <tr class="tabela-dado" id="obesidadegrave">
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
        calcular() {
            this.erro = false;
            this.erroMsg.length = 0;
            if (this.altura === "") {
                this.erro = true;
                this.erroMsg.push("Digite uma altura.");
            }
            if (this.massa === "") {
                this.erro = true;
                this.erroMsg.push("Digite uma massa.");
            }

            if (this.erro == true) {
                return true;
            }

            //


            location.href = "#tabela";
            let elementos = document.querySelectorAll(".tabela-dado");
            elementos.forEach((elemento) => {
                elemento.classList.remove("ativo");
            })

            let imc = this.massa / (Math.pow(this.altura, 2));

            document.getElementById("imc").innerText = imc.toFixed(2);


            //

            if (imc < 18.5) {
                document.getElementById("magreza").classList.add("ativo");
                document.getElementById("imc-container").style.borderColor = "#2ddf00";
                document.getElementById("imc-container").style.backgroundColor = "#2ddf00";
                return true;
            }
            else if (imc >= 18.5 && imc <= 24.99) {
                document.getElementById("normal").classList.add("ativo");
                document.getElementById("imc-container").style.borderColor = "rgb(255, 252, 58)";
                document.getElementById("imc-container").style.backgroundColor = "#fff27d";
                return true;
            }
            else if (imc > 24.99 && imc <= 29.9) {
                document.getElementById("sobrepeso").classList.add("ativo");
                document.getElementById("imc-container").style.borderColor = "#ff8080";
                document.getElementById("imc-container").style.backgroundColor = "#ffa6a6";
                return true;
            }
            else if (imc > 29.99 && imc <= 39.9) {
                document.getElementById("obesidade").classList.add("ativo");
                document.getElementById("imc-container").style.borderColor = "#ff3535";
                document.getElementById("imc-container").style.backgroundColor = "#ff6363";
                return true;
            }
            else if (imc >= 40) {
                document.getElementById("obesidadegrave").classList.add("ativo");
                document.getElementById("imc-container").style.borderColor = "#ff0000";
                document.getElementById("imc-container").style.backgroundColor = "#ff4f4f";
                return true;
            }

        }
    },
    beforeCreate: () => {
        document.title = "Calculadora de IMC | MultiCalc";
    }
}
</script>

<style scoped>
#imc-container {
    display: block;
    margin: auto;
    border: 3px solid #2ddf00;
    background-color: #b1ff9e;
    border-radius: 12px;
    padding: 10px;
    width: 350px;
    margin-top: 17px;
}

#imc-container span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}

@media only screen and (max-width: 570px) {
    #imc-container {
        width: 50%;
    }

    #imc-container span {
        font-size: 20px;
    }
}

.grid-info>p::first-letter {
    font-weight: 300;
    font-size: 28px;
    font-family: 'Times New Roman', Times, serif;
}

.text-center {
    font-weight: bolder;
}

.form-floating>label {
    color: #878787;
}

.botaoEnviar {
    width: 100%;
}

.grid-container {
    display: grid;
    grid-template: "a a";
    grid-gap: 50px;
    margin: 20px auto;
    align-items: center;
    justify-content: center;
}

.grid-row>p {
    font-size: 16px;
    text-align: left;
    white-space: inherit;
}

.grid-info {
    background: #fcfc9d;
    border-radius: 16px;
    padding: 20px;
}

.grid-row {
    width: 300px;
}

#magreza.ativo {
    background-color: #86ff67;
}

#normal.ativo {
    background-color: rgb(255, 252, 58);
    ;
}

#sobrepeso.ativo {
    background-color: #ff8080;
}

#obesidade.ativo {
    background-color: #ff3535;
}

#obesidadegrave.ativo {
    background-color: #ff0000;
}

.input-group>* {
    width: 100%;
}

.input-group {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 900px) {
    .grid-container {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
    }

    .grid-row>* {
        display: block;
    }
}
</style>