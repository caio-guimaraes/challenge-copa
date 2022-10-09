import { Icon } from '@/components'

export const Dashboard = () => (
    <div className="">
        <header className="bg-red-500 text-white p-4">
            <div className="container max-w-3xl flex justify-between">
                <img src="/imgs/logo-fundo-vermelho.svg" alt="" className="w-28 md:w-40" />
                <a href="/profile">
                    <Icon name="profile" className="w-6" />
                </a>
            </div>
        </header>

        <main>
            <section id="header" className="space-y-6 bg-red-500 text-white p-4">
                <div className="container max-w-3xl space-y-2">
                    <span>Olá Caio</span>
                    <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
                </div>
            </section>

            <section id="content">

            </section>
        </main>
    </div>
)