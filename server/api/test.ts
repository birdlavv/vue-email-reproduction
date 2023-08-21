import { useCompiler } from '#vue-email'
export default defineEventHandler(async (event) => {
  const template = await useCompiler('WelcomeEmail.vue')
  return template
})