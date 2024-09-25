// Pricing Card component
import { Check } from "lucide-react";

const PricingCard = ({ title, price, features }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">{ title }</h3>
        <p className="text-3xl font-bold text-indigo-600 mb-6">{ price }</p>
        <ul className="space-y-2 mb-6">
            { features.map((feature, idx) => (
                <li key={ idx } className="flex items-center justify-center">
                    <Check className="text-green-500 mr-2" size={ 16 } />
                    { feature }
                </li>
            )) }
        </ul>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
            Выбрать
        </button>
    </div>
);

export default PricingCard