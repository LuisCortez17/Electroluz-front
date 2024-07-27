import { useState } from "react";
import { CartProduct } from "../../../types/Props";

const initialCartItems: CartProduct[] = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://via.placeholder.com/150",
        quantity: 2,
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://via.placeholder.com/150",
        quantity: 1,
    },
    // Agrega más productos si es necesario
];

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartProduct[]>(initialCartItems);
    const [discount, setDiscount] = useState<number>(0);

    const handleQuantityChange = (id: number, quantity: number) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const calculateTax = (subtotal: number) => {
        const taxRate = 0.1; // Ejemplo de tasa de impuesto del 10%
        return subtotal * taxRate;
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const tax = calculateTax(subtotal);
        return subtotal + tax - discount;
    };

    const handleApplyDiscount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica para aplicar el descuento, por ahora es un descuento fijo de $50
        setDiscount(50);
    };

    return (
        <div className="p-6 flex">
            <div className="w-3/4 pr-4">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Shopping Cart
                    </h2>
                    <ul>
                        {cartItems.length === 0 ? (
                            <li className="text-gray-600">
                                Your cart is empty.
                            </li>
                        ) : (
                            cartItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center mb-4 border-b border-gray-200 pb-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover mr-4"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-800">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600">
                                            Price: ${item.price.toFixed(2)}
                                        </p>
                                        <p className="text-gray-600">
                                            Subtotal: $
                                            {(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </p>
                                        <div className="flex items-center mt-2">
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        item.quantity - 1
                                                    )
                                                }
                                                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        item.quantity + 1
                                                    )
                                                }
                                                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                                className="ml-4 text-red-600 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
            <div className="w-1/4 pl-4">
                {cartItems.length > 0 && (
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                        <form
                            onSubmit={handleApplyDiscount}
                            className="mb-4 flex items-center"
                        >
                            <input
                                type="text"
                                placeholder="Discount Code"
                                className="border border-gray-300 rounded-md p-2 mr-2"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Apply
                            </button>
                        </form>
                        <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600">
                                Subtotal: ${calculateSubtotal().toFixed(2)}
                            </p>
                            <p className="text-gray-600">
                                Tax: $
                                {calculateTax(calculateSubtotal()).toFixed(2)}
                            </p>
                            {discount > 0 && (
                                <p className="text-gray-600">
                                    Discount: -${discount.toFixed(2)}
                                </p>
                            )}
                            <h3 className="text-lg font-medium text-gray-800">
                                Total: ${calculateTotal().toFixed(2)}
                            </h3>
                            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
