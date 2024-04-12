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
        const { data, error } = await supabase.auth.getUser()
        if (error) {
            console.error('Error fetching user:', error);
            return;
        }

        if (data.user) {
            user.value = data.user;
        } else {
            console.log('No user data available.');
        }
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
