import React from 'react'
import Header from '../../components/Header';

const Login = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form className="flex flex-col justify-center items-center p-8 border-2 border-gray-300 rounded-lg shadow-md bg-white max-w-sm w-full">
                    <h2 className="text-2xl font-semibold mb-6">Login</h2>

                    <label className="mb-2 text-left w-full">Email</label>
                    <input
                        type="text"
                        placeholder="Digite o seu Email"
                        className="mb-4 p-2 border border-gray-300 rounded w-full"
                    />

                    <label className="mb-2 text-left w-full">Senha</label>
                    <input
                        type="password"
                        placeholder="Digite a sua senha"
                        className="mb-4 p-2 border border-gray-300 rounded w-full"
                    />

                    <button className="mt-4 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200">Entrar</button>

                    <p className="mt-4 text-sm text-gray-600">
                        Não tem uma conta? <a href="/register" className="text-blue-500 hover:underline">Cadastre-se aqui</a>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login;