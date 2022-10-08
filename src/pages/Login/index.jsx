import { Icon, Input } from '@/components'

export const Login = () => {
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

                <form className="p-4 space-y-6">
                    <Input type="text" name="email" label="Seu e-mail" placeholder="Digite seu e-mail" />
                    <Input type="password" name="password" label="Sua senha" placeholder="Digite sua senha" />

                    <button className="w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">
                        Entrar
                    </button>
                </form>
            </main>
        </div>
    )
    
}