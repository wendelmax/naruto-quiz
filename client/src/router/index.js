import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '@/views/Quiz.vue'
import Result from '@/views/Result.vue'
import CharacterForm from '@/views/CharacterForm.vue'
import QuestionForm from '@/views/QuestionForm.vue'

const routes = [
  {
    path: '/',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/result/:characterId',
    name: 'Result',
    component: Result,
    props: true,
  },
  {
    path: '/add-character',
    name: 'AddCharacter',
    component: CharacterForm,
  },
  {
    path: '/add-question',
    name: 'AddQuestion',
    component: QuestionForm,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
