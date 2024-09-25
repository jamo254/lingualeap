import React from 'react';
import { Check } from "lucide-react";

const PricingCard = ({ title, price, features, onSelect }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">{ title }</h3>
        <p className="text-4xl font-bold mb-6">{ price }</p>
        <ul className="mb-6">
            { features.map((feature, idx) => (
                <li key={ idx } className="flex items-center mb-2">
                    <Check className="text-green-500 mr-2" size={ 16 } />
                    <span>{ feature }</span>
                </li>
            )) }
        </ul>
        <button
            onClick={ () => onSelect({ title, price, features }) }
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
            Выбрать
        </button>
    </div>
);

export default PricingCard;