<template>
    <div>
      <h1>Home View</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-for="activity in activities" :key="activity.activityId">
          <router-link :to="'/activity/' + activity.activityId">{{ activity.name }}</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        isLoading: true,
        activities: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('/api/activities');
        this.activities = response.data.activities;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  };
  </script>
  