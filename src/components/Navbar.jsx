// Navbar component
import { Book, Globe, Users, Calendar, Check, Mail, Phone, MapPin, Star, Menu, X, ChevronUp } from 'lucide-react';

const Navbar = ({ isNavOpen, toggleNav }) => (
    <nav className="bg-indigo-700 text-white p-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Языковая Школа "LinguaEdge"</h1>
            <div className="md:hidden">
                <button onClick={ toggleNav }>
                    { isNavOpen ? <X size={ 24 } /> : <Menu size={ 24 } /> }
                </button>
            </div>
            <ul className={ `md:flex space-y-2 md:space-y-0 md:space-x-6 ${isNavOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-indigo-700 md:bg-transparent p-4 md:p-0` }>
                { ['О нас', 'Курсы', 'Преподаватели', 'Цены', 'Отзывы', 'Контакты'].map((item) => (
                    <li key={ item }>
                        <a href={ `#${item.toLowerCase().replace(' ', '-')}` } className="hover:text-indigo-200 block" onClick={ toggleNav }>
                            { item }
                        </a>
                    </li>
                )) }
            </ul>
        </div>
    </nav>
);


export default Navbar