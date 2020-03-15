<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li  v-for="(answer, index) in variants" :key="index">
        <input v-model="value" :type="type"
                               :value="answer"/>
        <label>{{ answer }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    variants: Array,
    type: String
  },
  data() {
    return {
      value: []
    };
  },
  computed: {},
  components: {}
};
</script>

<style scoped>
ul{
  list-style:none;
}
</style>