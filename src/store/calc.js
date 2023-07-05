import { defineStore } from 'pinia'

export const useCalcStore = defineStore("calculator", {
  state: () => {
    return {
      current: 0,
      prevValue: 0,
      operator: '',
    }
  },
  actions: {
    resetDisplay() {
      // resets the current value
      this.current = 0
    },

    concatNum(num) {
      // checks if the current value is 0 and
      // the users input is 0
      // then this function will return since the current value
      // on screen shouldn't be start on 0
      if(num === '0' && this.current === 0) return

      // check if the current number is 0
      // the parameter num will append to the current number
      if(this.current === 0) {
        this.current = num
      } else {
        // check if the current number includes a '.'
        // if no then it will display on the screen
        // if yes then it will return since you can't put more
        // than 1 '.'
        if(num == '.' && this.current.toString().includes('.')) return
        this.current += num
      }
    },

    modulus() {
      this.current = this.current / 100
    },

    operatorF(operator) {
      // check if the current number is 0
      // if yes then you users can't use any operator
      // if the operator has already a operator
      // then users can't append any operator
      if(this.current === 0 || this.operator === '+' || this.operator === '-' || this.operator === '*' || this.operator === '/') {
        return
      } else {
        this.operator = operator
        this.prevValue = this.current
        this.current = 0
      }
    },

    calculate() {
      // check if the previous value is zero
      // if yes, since it will be an error
      // it will return, the users need to add an operator 
      // so the previous value will have a value
      if(this.prevValue == 0) return
      this.current = eval(
        this.prevValue + this.operator + this.current
      )

      // then reset the previous value and the operator
      this.prevValue = 0
      this.operator = ''
    },

    deleteVal() {
      // this function will return if the current value is 0
      // if not then, in every press on DEL button this function
      // will slice the last digit of the current value
      // toString() is added because it has an error to can't use the
      // slice() if the value is the a string or an Array
      if(this.current === 0) return
      this.current = this.current.toString().slice(0, -1)
    }
  }
})