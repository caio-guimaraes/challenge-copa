import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import { Fragment } from 'react'
import { Icon, Card, DateSelect } from '@/components'

export const Dashboard = () => {
    const [auth] = useLocalStorage('auth', {})

    if (!auth?.user?.id) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <Fragment>
            <header className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl flex justify-between">
                    <img src="/imgs/logo-fundo-vermelho.svg" alt="" className="w-28 md:w-40" />
                    <a href="/profile">
                        <Icon name="profile" className="w-6" />
                    </a>
                </div>
            </header>

            <main className='space-y-6'>
                <section id="header" className="space-y-6 bg-red-500 text-white p-4">
                    <div className="container max-w-3xl space-y-2">
                        <span>Olá Caio!</span>
                        <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
                    </div>
                </section>

                <section id="content" className="container max-w-3xl p-4 space-y-4">
                    <DateSelect />
                    
                    <div className="space-y-4">
                        <Card timeA={{ slug: 'sui'}} timeB={{ slug: 'cam'}} match={{ time: '7:00' }}/>
                        <Card timeA={{ slug: 'uru'}} timeB={{ slug: 'cor'}} match={{ time: '7:00' }}/>
                        <Card timeA={{ slug: 'por'}} timeB={{ slug: 'gan'}} match={{ time: '7:00' }}/>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}