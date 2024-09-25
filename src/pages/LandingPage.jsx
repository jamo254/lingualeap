import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import Section from '../components/Section';
import CourseCard from '../components/CourseCard';
import TeacherCard from '../components/TeacherCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../container/ContactForm';
import { Book, Globe, Users, Calendar, Check, ChevronUp } from 'lucide-react';

const LandingPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const contactFormRef = useRef(null);  // Create a ref for the ContactForm section

    const scrollToContactForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const courses = [
        {
            title: "Английский язык",
            description: "От начинающих до продвинутых",
            icon: Globe,
            detailedInfo: (
                <>
                    <h3>Обзор курса</h3>
                    <p>Наш курс английского языка разработан для улучшения всех аспектов владения языком. Он охватывает четыре ключевых навыка: чтение, письмо, говорение и аудирование.</p>
                    <h4>Ключевые особенности:</h4>
                    <ul>
                        <li>Всесторонний охват грамматики и лексики</li>
                        <li>Интерактивные разговорные сессии</li>
                        <li>Регулярные письменные задания с персональной обратной связью</li>
                        <li>Увлекательные материалы для чтения различных жанров</li>
                        <li>Упражнения на аудирование с использованием аутентичных материалов</li>
                    </ul>
                    <h4>Продолжительность курса:</h4>
                    <p>12 недель (60 часов обучения)</p>
                    <h4>Уровень владения языком:</h4>
                    <p>От начинающего до продвинутого (группы формируются на основе уровня владения языком)</p>
                </>
            )
        },
        {
            title: "Бизнес-английский",
            description: "Для профессионального роста",
            icon: Book,
            detailedInfo: (
                <>
                    <h3>Обзор курса</h3>
                    <p>Наш курс бизнес-английского адаптирован для профессионалов, которым необходимо использовать английский язык в рабочей среде. Он фокусируется на коммуникативных навыках, необходимых для успеха в международном бизнесе.</p>
                    <h4>Ключевые особенности:</h4>
                    <ul>
                        <li>Бизнес-лексика и идиомы</li>
                        <li>Написание деловых писем и отчетов</li>
                        <li>Навыки презентации</li>
                        <li>Язык переговоров и деловых встреч</li>
                        <li>Кейс-стади и ролевые игры</li>
                    </ul>
                    <h4>Продолжительность курса:</h4>
                    <p>8 недель (40 часов обучения)</p>
                    <h4>Уровень владения языком:</h4>
                    <p>От среднего до продвинутого</p>
                </>
            )
        },
        {
            title: "Подготовка к IELTS",
            description: "Высокие баллы гарантированы",
            icon: Users,
            detailedInfo: (
                <>
                    <h3>Обзор курса</h3>
                    <p>Наш курс подготовки к IELTS разработан, чтобы помочь вам достичь желаемого балла на экзамене IELTS. Мы охватываем все четыре раздела теста: Аудирование, Чтение, Письмо и Говорение.</p>
                    <h4>Ключевые особенности:</h4>
                    <ul>
                        <li>Всесторонний обзор формата экзамена IELTS</li>
                        <li>Стратегии для каждого раздела теста</li>
                        <li>Практические тесты и пробные экзамены</li>
                        <li>Индивидуальная обратная связь по заданиям на письмо и говорение</li>
                        <li>Советы по управлению временем и снижению стресса</li>
                    </ul>
                    <h4>Продолжительность курса:</h4>
                    <p>6 недель (36 часов обучения)</p>
                    <h4>Уровень владения языком:</h4>
                    <p>От среднего до продвинутого</p>
                </>
            )
        },
    ];

    const teachers = [
        { name: "Иван Сидоров", language: "Английский", experience: "10 лет", image: "https://images.pexels.com/photos/10031266/pexels-photo-10031266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Фред Д.", language: "Английский", experience: "8 лет", image: "https://avatars.preply.com/i/logos/i/logos/avatar_mzcgzc0kle.jpg" },
        { name: "Мария Иванова", language: "Французский", experience: "12 лет", image: "https://avatars.preply.com/i/logos/i/logos/avatar_oi9ryaj91kc.jpg" },
        { name: "Алексей Смирнов", language: "Испанский", experience: "7 лет", image: "https://avatars.preply.com/i/logos/i/logos/avatar_982ggnt5tts.jpg" },
    ];

    const pricingPlans = [
        { title: "Базовый", price: "5000 ₽/мес", features: ["2 занятия в неделю", "Доступ к онлайн-материалам", "Ежемесячный тест прогресса"] },
        { title: "Стандарт", price: "8000 ₽/мес", features: ["3 занятия в неделю", "Доступ к онлайн-материалам", "Еженедельные разговорные клубы", "Персональный куратор"] },
        { title: "Премиум", price: "12000 ₽/мес", features: ["5 занятий в неделю", "Безлимитный доступ ко всем материалам", "Индивидуальная программа обучения", "Подготовка к международным экзаменам"] },
    ];

    const testimonials = [
        { name: "Анна С.", text: "Благодаря школе 'LinguaEdge' я наконец-то преодолела языковой барьер и свободно общаюсь на английском!", rating: 5 },
        { name: "Иван М.", text: "Отличные преподаватели и удобный формат занятий. Всего за полгода я подготовился и сдал IELTS на 7.5!", rating: 5 },
        { name: "Елена К.", text: "Дружелюбная атмосфера и профессиональный подход. Я получаю удовольствие от каждого занятия!", rating: 4 },

    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar isNavOpen={ isNavOpen } toggleNav={ toggleNav } />

            {/* Hero Section */ }
            <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-5xl font-bold mb-4">Откройте мир с "LinguaEdge"</h1>
                    <p className="text-xl mb-10">Изучайте иностранные языки с профессионалами</p>
                    <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-indigo-100 transition duration-300 text-lg"
                        onClick={ scrollToContactForm }  // Scroll to ContactForm on click
                    >
                        Записаться на пробный урок
                    </button>


                </div>
            </header>

            {/* About Us */ }
            <Section id="о-нас" title="О нашей школе">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="https://sqaeducation.org/wp-content/uploads/2024/06/AdobeStock_431659942.jpg" alt="Наша школа" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <p className="text-lg mb-4">
                            "LinguaEdge" - это современная языковая школа, где каждый студент находит свой путь к свободному владению иностранными языками. Мы предлагаем индивидуальный подход, инновационные методики и дружественную атмосферу для эффективного обучения.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center"><Check className="text-green-500 mr-3" /> Опытные преподаватели-носители языка</li>
                            <li className="flex items-center"><Check className="text-green-500 mr-3" /> Современные учебные материалы</li>
                            <li className="flex items-center"><Check className="text-green-500 mr-3" /> Гибкий график занятий</li>
                            <li className="flex items-center"><Check className="text-green-500 mr-3" /> Онлайн и офлайн форматы обучения</li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Courses */ }
            <Section id="курсы" title="Наши курсы" className="bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { courses.map((course, index) => (
                        <CourseCard key={ index } { ...course } />
                    )) }
                </div>
            </Section>

            {/* Teachers */ }
            <Section id="преподаватели" title="Наши преподаватели">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    { teachers.map((teacher, index) => (
                        <TeacherCard key={ index } { ...teacher } />
                    )) }
                </div>
            </Section>

            {/* Pricing */ }
            <Section id="цены" title="Наши тарифы" className="bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { pricingPlans.map((plan, index) => (
                        <PricingCard key={ index } { ...plan } />
                    )) }
                </div>
            </Section>

            {/* Features */ }
            <Section id="преимущества" title="Почему выбирают нас">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    { [
                        { title: "Индивидуальный подход", description: "Программа обучения адаптируется под ваши цели и темп", icon: Users },
                        { title: "Гибкий график", description: "Занятия в удобное для вас время", icon: Calendar },
                        { title: "Современные методики", description: "Используем передовые технологии в обучении", icon: Book },
                        { title: "Международные сертификаты", description: "Подготовка к международным экзаменам", icon: Globe },
                    ].map((feature, index) => (
                        <div key={ index } className="text-center">
                            <feature.icon className="w-16 h-16 mx-auto text-indigo-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{ feature.title }</h3>
                            <p>{ feature.description }</p>
                        </div>
                    )) }
                </div>
            </Section>

            {/* Testimonials */ }
            <Section id="отзывы" title="Отзывы наших студентов" className="bg-indigo-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { testimonials.map((testimonial, index) => (
                        <TestimonialCard key={ index } { ...testimonial } />
                    )) }
                </div>
            </Section>

            {/* Call to Action */ }
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-4">Готовы начать свое языковое путешествие?</h2>
                    <p className="text-xl mb-8">Запишитесь на бесплатный пробный урок прямо сейчас!</p>
                    <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-indigo-100 transition duration-300 text-lg"
                        onClick={ scrollToContactForm }
                    >
                        Записаться
                    </button>
                </div>
            </section>

            {/* Contact Form */ }
            <Section id="контакты" title="Свяжитесь с нами">
                <div ref={ contactFormRef }>  {/* Reference to the ContactForm */ }
                    <ContactForm />
                </div>
            </Section>

            {/* Scroll to Top Button */ }
            { showScrollTop && (
                <button
                    onClick={ scrollToTop }
                    className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
                >
                    <ChevronUp size={ 24 } />
                </button>
            ) }
        </div>
    );
};

export default LandingPage;