//  Testimonial Card component
import { Star } from "lucide-react";

const TestimonialCard = ({ name, text, rating }) => (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
        <p className="mb-4 italic">"{ text }"</p>
        <p className="font-semibold">{ name }</p>
        <div className="flex justify-center mt-2">
            { [...Array(rating)].map((_, i) => (
                <Star key={ i } className="text-yellow-400" size={ 20 } fill="currentColor" />
            )) }
        </div>
    </div>
);

export default TestimonialCard;