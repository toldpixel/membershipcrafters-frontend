export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Navigating from:', from.path)
  console.log('Navigating to:', to.path)
    const { user } = useAuth()
  
    if (user.value) {
      return navigateTo('/dashboard')
    }
  })