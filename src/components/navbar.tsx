import { FaBars, FaHome, FaShoppingCart, FaUser } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <button className="focus:outline-none">
                    <FaHome className="text-white" />
                </button>
                <button className="focus:outline-none">
                    <FaBars className="text-white" />
                </button>
            </div>
            <div className="w-full flex justify-center">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-1/2 p-2 rounded-md focus:outline-none"
                />
            </div>
            <div className="flex items-center space-x-4">
                <button className="focus:outline-none">
                    <FaShoppingCart className="text-white" />
                </button>
                <button className="focus:outline-none">
                    <FaUser className="text-white" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar