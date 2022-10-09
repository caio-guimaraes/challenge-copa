import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'

import { Icon, Input } from '@/components'

const validationSchema = yup.object().shape({
    email: yup.string().email('Informe um e-mail válido').required('Informe seu e-mail'),
    password: yup.string().required('Digite uma senha'),
})

export const Login = () => {
    const [auth, setAuth] = useLocalStorage('auth', {})

    const formik = useFormik({
        onSubmit: async (values) => {
            console.log(values)
            const res = await axios({
                method: 'get',
                baseURL: 'http://localhost:3000',
                url: '/login',
                auth: {
                    username: values.email,
                    password: values.password
                }
            })

            setAuth(res.data)
        },
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema
    })

    if (auth?.user?.id) {
        return <Navigate to="/dashboard" replace={true} />
    }

    return (
        <div className="">
            <header className="p-4 border-b border-red-300">
                <div className="container flex justify-center max-w-xl">
                    <img src="/imgs/logo-fundo-branco.svg" alt="" className="w-32 md:w-40" />
                </div>
            </header>

            <main className="container max-w-xl p-4">
                <div className="flex items-center p-4 space-x-4">
                    <a href="/">
                        <Icon name="back" className="h-6" />
                    </a>
                    <h2 className="text-xl font-bold">Entre na sua conta</h2>
                </div>

                <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
                    <Input type="text" name="email" label="Seu e-mail" placeholder="Digite seu e-mail" 
                        value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                    />
                    <Input type="password" name="password" label="Sua senha" placeholder="Digite sua senha" 
                        value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                        error={formik.touched.password && formik.errors.password}
                    />

                    <button type='submit' disabled={!formik.isValid || formik.isSubmitting}
                        className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50"
                    >
                        { formik.isSubmitting ? 'Carrengando...' : 'Entrar'}
                    </button>
                </form>
            </main>
        </div>
    )
    
}