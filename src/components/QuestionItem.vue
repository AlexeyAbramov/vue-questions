<template>
  <div>
    <div v-if="!results">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="(answer, index) in variants" :key="index">
          <input v-model="value" :type="type" :value="answer" />
          <label>{{ answer }}</label>
        </li>
      </ul>
      <button
        class="btn btn-primary ml-4"
        @click="next"
        v-if="!isCompleted"
        :disabled="isDisabled"
      >
        {{ buttons.next }}
      </button>
      <button
        class="btn btn-secondary ml-4"
        @click="print"
        v-else
        :disabled="isDisabled"
      >
        {{ buttons.print }}
      </button>
      <h3>Ваш текущий ответ: {{ value }}</h3>
      <h3>Ответы на вопросы:</h3>
    </div>
    
    <transition name="an">
    <div v-if="results">
      <h4 class="offset-3" v-for="(otvet, index) in final" :key="index">
        {{ index + 1 }} - {{ otvet }}
      </h4>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    title: String,
    type: String,
    variants: Array,
    final: Array,
    totalQuestions: Number
  },
  data() {
    return {
      value: [],
      buttons: {
        next: 'Next question',
        print: 'Print answers'
      },
      results: false
    };
  },
  methods: {
    next() {
      this.$emit('nextQuestion', this.value);
      this.value = [];
    },
    print() {
      this.$emit('printAnswers', this.value);
      this.value = [];
      this.results = true;
    }
  },
  computed: {
    isCompleted() {
      return this.count == this.totalQuestions - 1;
    },
    isDisabled() {
      return this.value == '';
    }
  },
  components: {}
};
</script>

<style scoped>
ul {
  list-style: none;
}
.an-enter{
  opacity: 0;
}
.an-enter-active{
  transition: opacity 0.5s;
}
.an-leave{

}
.an-leave-active{
    opacity: 0;
    transition: opacity 0,5s;
}
</style>
