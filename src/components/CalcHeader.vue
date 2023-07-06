<script>
  import { ref } from 'vue'

  export default {
    name: 'CalcHeader',
    props: {
      title: {
        type: String,
        default: 'This is header'
      }
    },
    data() {
      return {
        activeTheme: ref('blue')
      }
    },
    setup() {
      function themePicking(theme) {
        this.activeTheme = theme
        console.log(this.activeTheme)
        localStorage.setItem('theme', this.activeTheme)
      }

      return {
        themePicking
      }
    }, 
    created() {
      const activeTheme = localStorage.getItem('theme')

      if(activeTheme) {
        this.activeTheme = activeTheme
      }
    }
  }
</script>

<template>
  <header>
    <h1 class="header">{{ title }}</h1>
   

    <div class="theme">
      <h2>Theme</h2>
      <form class="form" action="">
        <div class="form-container">
          <label for="blue">1</label>
          <input type="radio" name="theme" v-model="activeTheme" value="blue" id="blue" @click="themePicking('blue')" :checked="activeTheme === 'blue'" />
        </div>
        <div class="form-container">
          <label for="light">2</label>
          <input type="radio" name="theme" v-model="activeTheme" value="light" id="light" @click="themePicking('light')" :checked="activeTheme === 'light'" />
        </div>
        <div class="form-container">
          <label for="punk">3</label>
          <input type="radio" name="theme" v-model="activeTheme" value="punk" id="punk" @click="themePicking('punk')" :checked="activeTheme === 'punk'" />
        </div>
      </form>
    </div>
  </header>
</template>

<style lang="scss">
  @use '../assets/scss/utilities/' as *;

  :root {
    --clr-background-main: hsl(222, 26%, 31%);
    --clr-background-btn: hsl(223, 31%, 20%);
    --clr-background-screen: hsl(224, 36%, 15%);
    --clr-keys-key: hsl(225, 21%, 49%);
    --clr-keys-key-shadow: hsl(224, 28%, 35%);
    --clr-keys-toggle: hsl(6, 63%, 50%);
    --clr-keys-toggle-shadow: hsl(6, 70%, 34%);
    --clr-keys-btn: hsl(30, 25%, 89%);
    --clr-keys-btn-shadow: hsl(28, 16%, 65%);
    --clr-text-dark: hsl(221, 14%, 31%);
    --clr-text-light: hsl(0, 0%, 100%);
    --clr-radio: white;
    --clr-text-alt: white;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(24) 0;
  }

  .header {
    color: var(--clr-text-alt);
  }

  .theme {
    display: flex;
    gap: rem(16);
    
    h2 {
      margin-top: auto;
      font-size: rem(16);
      color: var(--clr-text-alt);
      text-transform: uppercase;
    }
  }

  .form {
    width: fit-content;
    display: flex;
    gap: rem(16);

    label {
      color: var(--clr-text-alt);
    }

    &-container {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    & input[type="radio"] {
      appearance: none;
      width: rem(18);
      height: rem(18);
      outline: 2px solid var(--clr-radio, currentColor);
      outline-offset: 2px;
      border-radius: 50%;
    }

    & input[type="radio"]#blue {
      --clr-radio: hsl(225, 21%, 49%);

      &:checked {
        background-color: var(--clr-radio);
      }
    }

    & input[type="radio"]#light {
      --clr-radio: hsl(185, 42%, 37%);

      &:checked {
        background-color: var(--clr-radio);
      }
    }

    & input[type="radio"]#punk {
      --clr-radio: hsl(281, 89%, 26%);

      &:checked {
        background-color: var(--clr-radio);
      }
    }
  }

  :root:has(#blue:checked) {
    --clr-background-main: hsl(222, 26%, 31%);
    --clr-background-btn: hsl(223, 31%, 20%);
    --clr-background-screen: hsl(224, 36%, 15%);

    --clr-keys-key: hsl(225, 21%, 49%);
    --clr-keys-key-shadow: hsl(224, 28%, 35%);
    --clr-keys-toggle: hsl(6, 63%, 50%);
    --clr-keys-toggle-shadow: hsl(6, 70%, 34%);
    --clr-keys-btn: hsl(30, 25%, 89%);
    --clr-keys-btn-shadow: hsl(28, 16%, 65%);
    
    --clr-text-dark: hsl(221, 14%, 31%);
    --clr-text-light: hsl(0, 0%, 100%);
    --clr-text-alt: hsl(0, 0%, 100%);

    --clr-radio: white;
  }

  :root:has(#light:checked) {
    --clr-background-main: hsl(0, 0%, 90%);
    --clr-background-btn: hsl(0, 5%, 81%);
    --clr-background-screen: hsl(0, 0%, 93%);

    --clr-keys-key: hsl(185, 42%, 37%);
    --clr-keys-key-shadow: hsl(185, 58%, 25%);
    --clr-keys-toggle: hsl(25, 98%, 40%);
    --clr-keys-toggle-shadow: hsl(25, 99%, 27%);
    --clr-keys-btn: hsl(45, 7%, 89%);
    --clr-keys-btn-shadow: hsl(35, 11%, 61%);
    
    --clr-text-dark: hsl(60, 10%, 19%);
    --clr-text-light: hsl(0, 0%, 100%);
    --clr-text-alt: hsl(60, 10%, 19%);
    
    --clr-radio: white;
  }

  :root:has(#punk:checked) {
    --clr-background-main: hsl(268, 75%, 9%);
    --clr-background-btn: hsl(268, 71%, 12%);
    --clr-background-screen: hsl(268, 71%, 12%);
    
    --clr-keys-key: hsl(281, 89%, 26%);
    --clr-keys-key-shadow: hsl(285, 91%, 52%);
    --clr-keys-toggle: hsl(176, 100%, 44%);
    --clr-keys-toggle-shadow: hsl(177, 92%, 70%);
    --clr-keys-btn: hsl(268, 47%, 21%);
    --clr-keys-btn-shadow: hsl(290, 70%, 36%);
    
    --clr-text-dark: hsl(52, 100%, 62%);
    --clr-text-light: hsl(0, 0%, 100%);
    --clr-text-alt: hsl(52, 100%, 62%);
    
    --clr-radio: white;
  }
</style>