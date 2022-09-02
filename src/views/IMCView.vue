<template>
    <h1 class="mt-2 text-center" style="color: #333; font-weight: bold;">Calculadora de IMC</h1>
    <div class="grid-container">
        <div class="grid-row grid-info">
            <p style="margin-left: 20px;">⠀⠀IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            <br>
            ⠀⠀O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
            </p>
        </div>
        <div class="grid-row">
            <span>teste</span>
        </div>
    </div>
</template>


<script>
    export default {
        name: "IMCView",
        beforeCreate: () => {
            document.title = "Calculadora de IMC | MultiCalc";
        }
    }
</script>

<style scoped>
    .text-center
    {
        font-weight: bolder;
    }
    .grid-container
    {
        display: grid; 
        grid-template: "a a";
        justify-content: center;
        grid-gap: 50px;
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
    @media only screen and (max-width: 968px)
    {
        .grid-container
        {
            display: block;
        }
        .grid-info
        {
            border-radius: 0;
        }
        .grid-container > *
        {
            margin: auto;
        }
    }
</style>