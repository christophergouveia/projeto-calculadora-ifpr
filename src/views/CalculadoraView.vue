<template>
    <main>
        <div class="calculadora">

            <div class="tela-resultado">
                <input type="text" id="resultado" value="0" disabled>
            </div>

            <div class="calculadora-keys">

                <button type="button" class="operador" value="+">+</button>
                <button type="button" class="operador" value="-">-</button>
                <button type="button" class="operador" value="*">&times;</button>
                <button type="button" class="operador" value="/">&divide;</button>

                <button type="button" value="7">7</button>
                <button type="button" value="8">8</button>
                <button type="button" value="9">9</button>


                <button type="button" value="4">4</button>
                <button type="button" value="5">5</button>
                <button type="button" value="6">6</button>


                <button type="button" value="1">1</button>
                <button type="button" value="2">2</button>
                <button type="button" value="3">3</button>


                <button type="button" value="0">0</button>
                <button type="button" class="decimal" value=".">.</button>
                <button type="button" class="limpar-tudo" value="limpar-tudo">AC</button>

                <button type="button" class="igual" value="=">=</button>

            </div>
        </div>
        <h1 align="center">Em desenvolvimento</h1>
    </main>
</template>

<script>
export default {
    name: 'CalculadoraView'
}
</script>

<style>
.calculadora {
    border: 1px solid #dadada;
    width: 400px;
    display: table;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}

.tela-resultado {
    width: 100%;
    height: 80px;
    background-color: #333;
    display: flex;
    padding: 15px;
    align-items: center;
}

#resultado
{
    color: #fff;
    font-size: 3em;
    text-align: right;
    width: 100%;
    border: 0;
    background: transparent;
    white-space: nowrap;
    overflow-x: auto;
}

button {
    height: 60px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    font-size: 2rem;
    color: #333;
}

button:hover {
    background-color: #eaeaea;
}

.operador {
    color: #337cac;
}

.limpar-tudo {
    background-color: #f0595f;
    border-color: #b0353a;
    color: #fff;
}

.limpar-tudo:hover {
    background-color: #f17377;
}

.igual {
    background-color: #2e86c0;
    border-color: #337cac;
    color: #fff;
    grid-column: 2 / -1;
}

.igual:hover {
    background-color: #4e9ed4;
}

.calculadora-keys {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    padding: 10px;
}
</style>