<template>
  <div id="app">
    <QuestionItem
      :title="currentQ.title"
      :variants="currentQ.variants"
      :type="currentQ.type"
      :count="current"
      @nextQuestion="next($event)"
      @printAnswers="print($event)"
      :final="final"
      :totalQuestions="questions.length"
    />
  </div>
</template>

<script>
import QuestionItem from '@/components/QuestionItem';

export default {
  data() {
    return {
      current: 0,
      final:[],
      questions: [
        {
          id: 0,
          title: 'Какой тег задает ссылку?',
          variants: ['a', 'div', 'span', 'img'],
          type: 'radio'
        },
        {
          id: 1,
          title: 'Какой tag задает ссылку?',
          variants: ['a', 'div', 'span', 'img'],
          type: 'checkbox'
        }
      ]
    };
  },
  methods: {
    next(e) {
       this.$set(this.final, this.current, e);
       this.current++;
    },
    print(e){
       this.$set(this.final, this.current, e);
    }
  },
  computed: {
    currentQ() {
      return this.questions[this.current];
    },
  },
  created() {
    for (let i = 0; i < this.questions.length; i++) {
      this.$set(this.questions[i], 'addSomePropertiesToAllObjects', 55);
    }
  },
  components: {
    QuestionItem
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
