import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import { Icon, Card, DateSelect } from '@/components'

export const Profile = () => {
    const [auth, setAuth] = useLocalStorage('auth', {})

    const logout = () => setAuth({})

    if (!auth?.user?.id) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <>
            <header className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl flex justify-between p-4">
                    <img src="/imgs/logo-fundo-vermelho.svg" alt="" className="w-28 md:w-40" />
                    <div onClick={logout} className="p-2 cursor-pointer">
                        Sair
                    </div>
                </div>
            </header>

            <main className='space-y-6'>
                <section id="header" className="space-y-6 bg-red-500 text-white p-4">
                    <div className="container max-w-3xl space-y-2">
                        <a href="/dashboard">
                            <Icon name="back" className="w-6" />
                        </a>
                        <h3 className='text-2xl font-bold'>Caio Guimarães</h3>
                    </div>
                </section>

                <section id="content" className="container max-w-3xl p-4 space-y-4">
                    <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

                    <DateSelect />

                    <div className="space-y-4">
                        <Card timeA={{ slug: 'sui'}} timeB={{ slug: 'cam'}} match={{ time: '7:00' }}/>
                        <Card timeA={{ slug: 'uru'}} timeB={{ slug: 'cor'}} match={{ time: '7:00' }}/>
                        <Card timeA={{ slug: 'por'}} timeB={{ slug: 'gan'}} match={{ time: '7:00' }}/>
                    </div>
                </section>
            </main>
        </>
    )
}