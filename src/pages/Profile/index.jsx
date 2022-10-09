import { useState } from 'react'
import { addDays, subDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Icon, Card } from '@/components'

const initialDate = '2022-11-20T00:00:00Z'

const DateSelect = () => {
    const [currentDate, setCurrentDate] = useState(new Date(initialDate))

    const prevDay = () => {
        const prevDate = subDays(currentDate, 1)
        setCurrentDate(prevDate)
    }

    const nextDay = () => {
        const nextDate = addDays(currentDate, 1)
        setCurrentDate(nextDate)
    }

    return (
        <div className='p-4 flex space-x-4 items-center justify-center'>
            <Icon name="arrowLeft" className="w-6 text-red-500" onClick={ prevDay } />
            <span className='font-bold'>{ format(currentDate, "d 'de' MMMM", { locale: ptBR}) }</span>
            <Icon name="arrowRight" className="w-6 text-red-500" onClick={nextDay} />
        </div>
    )
}

export const Profile = () => (
    <>
        <header className="bg-red-500 text-white p-4">
            <div className="container max-w-3xl flex justify-between">
                <img src="/imgs/logo-fundo-vermelho.svg" alt="" className="w-28 md:w-40" />
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