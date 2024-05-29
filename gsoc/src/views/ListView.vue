<!-- List View Screen -->
<template>
  <div>
    <h1>List View</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getItems } from "@/api/items";

export default {
  name: "ListView",
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', description: 'This is the description for item 1' },
        { id: 2, name: 'Item 2', description: 'This is the description for item 2' },
        { id: 3, name: 'Item 3', description: 'This is the description for item 3' }
      ]
    };
  },
  async created() {
    try {
      const response = await getItems();
      this.items = response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  font-size: 18px;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
</style>
