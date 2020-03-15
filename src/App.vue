<template>
  <div id="app">
    <QuestionItem :title="currentQ.title"
                  :variants="currentQ.variants"
                  :type="currentQ.type"
                  
    />
    <NextButton/>
  </div>
</template>

<script>
import QuestionItem from '@/components/QuestionItem';
import NextButton from '@/components/NextButton';

export default {
  data() {
    return {
      current:1,
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
  computed: {
    currentQ(){
      return this.questions[this.current]
    }
  },
  created() {
    for (let i = 0; i < this.questions.length; i++){
        this.$set(this.questions[i],'addSomePropertiesToAllObjects', 55)
    }
  },
  components: {
    QuestionItem,
    NextButton
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
