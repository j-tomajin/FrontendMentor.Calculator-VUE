<script>
  import { storeToRefs } from 'pinia'
  import { useCalcStore } from '../store/calc';

  export default {
    name: 'Calculator',
    setup() {
      const calcStore = useCalcStore()

      // state
      const { current, operator, prevValue } = storeToRefs(calcStore)
      // actions
      const { resetDisplay, concatNum, modulus, operatorF, calculate, deleteVal } = calcStore
      
      return { 
        current, operator, prevValue, // states
        resetDisplay, concatNum, modulus, operatorF, calculate, deleteVal // actions
      }
    },
  }
</script>

<template>
  <div>
    <div class="display">
      <span>{{ prevValue || '' }} {{ operator }}</span>
      <h2>{{ current || 0 }}</h2>
    </div>

    <div class="buttons grid">
      <button @click="concatNum('7')">7</button>
      <button @click="concatNum('8')">8</button>
      <button @click="concatNum('9')">9</button>
      <button @click="deleteVal" class="btn-dif">DEL</button>

      <button @click="concatNum('4')">4</button>
      <button @click="concatNum('5')">5</button>
      <button @click="concatNum('6')">6</button>
      <button @click="operatorF('+')">+</button>

      <button @click="concatNum('1')">1</button>
      <button @click="concatNum('2')">2</button>
      <button @click="concatNum('3')">3</button>
      <button @click="operatorF('-')">-</button>

      <button @click="concatNum('.')">.</button>
      <button @click="concatNum('0')">0</button>
      <button @click="operatorF('/')">/</button>
      <button @click="operatorF('*')">x</button>

      <button @click="resetDisplay" class="grid-2 btn-dif">RESET</button>
      <button @click="modulus">%</button>
      <button @click="calculate" class="btn-reset">=</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
  .display, .buttons {
    border-radius: rem(12);
  }

  .display {
    background-color: var(--clr-background-screen);
    color: var(--clr-text-dark);
    padding: rem(24);
    text-align: right;
    margin-bottom: rem(32);
    display: flex;
    flex-direction: column;
    line-height: 1;
    
    h2, span {
      color: var(--clr-text-alt);
    }

    h2 {
      font-size: rem(64);
      width: 100%;
    }

    span {
      height: rem(32);
      font-size: rem(32);
      // margin-right: rem(16);
    }
  }
  
  .buttons {
    padding: rem(24);
    background-color: var(--clr-background-btn);
  }
  button {
    border-radius: rem(10);
    color: var(--clr-text-dark);
    font-size: rem(24);
    background-color: var(--clr-keys-btn);
    border-bottom: 3px solid var(--clr-keys-btn-shadow);
  }
  .btn-dif {
    background-color: var(--clr-keys-key);
    color: var(--clr-text-light);
    border-bottom: 3px solid var(--clr-keys-key-shadow);
  }
  .btn-reset {
    background-color: var(--clr-keys-toggle);
    color: var(--clr-text-light);
    border-bottom: 3px solid var(--clr-keys-toggle-shadow);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 50px);
    gap: rem(16);

    &-2 {
      grid-column: 1 / 3;
    }
  }
</style>