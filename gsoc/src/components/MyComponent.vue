<template>
    <div>
      <p>{{ message }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0,
        message: 'Click the button to increment the count!'
      };
    },
    methods: {
      increment() {
        this.count++;
        this.message = `The count is now ${this.count}.`;
      },
      doubleNumber(number) {
        return number * 2;
      }
    }
  };
  </script>
  