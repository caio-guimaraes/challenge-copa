import { Navigate } from 'react-router-dom'
import { useLocalStorage, useAsync } from 'react-use'
import { format } from 'date-fns'
import axios from 'axios'

import { Fragment } from 'react'
import { Icon, Card, DateSelect } from '@/components'

export const Dashboard = () => {
    const [auth] = useLocalStorage('auth', {})
    const state = useAsync(async () => {
        const res = await axios({
            method: 'get',
            baseURL: 'http://localhost:3000',
            url: '/games'
        })

        return res.data
    })

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
                        { state.loading && 'Carregando jogos...' }
                        { state.error && 'Ops! Algo deu errado.' }

                        { !state.loading && !state.error && state.value.map(game => (
                            <Card 
                            homeTeam={{ slug: game.homeTeam }} 
                            awayTeam={{ slug: game.awayTeam }} 
                            match={{ time: format(new Date(game.gameTime), 'H:mm') }}
                        />
                        ))}
                    </div>
                </section>
            </main>
        </Fragment>
    )
}