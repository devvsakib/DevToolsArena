<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="user.username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="user.password" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post('http://localhost:8000/login', this.user);
          if (response.data.success) {
            this.$router.push('/home');
          } else {
            alert('Invalid username or password');
          }
        } catch (error) {
          console.error(error);
          alert('Error logging in');
        }
      }
    }
  }
  </script>
  