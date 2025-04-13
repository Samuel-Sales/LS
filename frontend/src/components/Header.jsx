import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header className="flex justify-between items-center p-6 bg-gray-700">
                <Link to='/'>
                    <h1 className="text-white text-2xl font-bold">Fitinhas LS</h1>
                </Link>

                <div className="hidden md:flex gap-6">
                    <Link className="bg-red-500 text-white px-4 py-2 rounded" to="/login">Entrar</Link>
                    <Link className="bg-green-500 text-white px-4 py-2 rounded" to="/register">Registrar</Link>
                </div>

                <button className="md:hidden text-white" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </header>

            {isOpen && (
                <nav className="md:hidden bg-gray-600 p-4">
                    <Link className="block text-white py-2" to="/login">Entrar</Link>
                    <Link className="block text-white py-2" to="/register">Registrar</Link>
                </nav>
            )}
        </div>
    )
}

export default Header;