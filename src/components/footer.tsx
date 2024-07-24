import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold mb-4">Atención al cliente</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Centro de ayuda</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contáctanos</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">PQR</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Sobre nosotros</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Quiénes somos</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Trabaja con nosotros</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Prensa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Políticas</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Términos y condiciones</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center text-gray-400">
                    <p>&copy; 2024 Nombre de tu Compañía. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer