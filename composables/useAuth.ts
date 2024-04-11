import { useRouter, useRoute } from '#imports'
import type { User } from '@/types/user'
import type { AuthUser, AuthError } from '@supabase/supabase-js'

const user = ref<AuthUser | null>(null)
const credentials = ref<User>({
    email: '',
    password: '',
});

export const useAuth = () => {
    const supabase = useSupabaseClient()

    const checkUser = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        
    }
    
    async function signIn(email: string | null, password: string | null) {
        if(email === null || password === null ) throw Error;
        
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if (error) throw error;
    
            await checkUser()
            console.log(user.value)
            if (user.value) {
                navigateTo('/dashboard')
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return {
                    message: `(${error.message})`,
                };
            } else {
                return {
                    message: `(${error})`,
                };
            }
        }
    }

    const signOut = async () => {
        let { error } = await supabase.auth.signOut()
        if (error) throw error
    
        user.value = null
        navigateTo('/')
    }

      return { user, signIn, signOut }
}
