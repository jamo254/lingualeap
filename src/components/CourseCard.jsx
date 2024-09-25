import React, { useState } from 'react';
import { X } from 'lucide-react';

const CourseCard = ({ title, description, icon: Icon, detailedInfo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
                <Icon className="w-16 h-16 mx-auto text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{ title }</h3>
                <p>{ description }</p>
                <button
                    className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300"
                    onClick={ openModal }
                >
                    Подробнее
                </button>
            </div>

            { isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">{ title }</h2>
                            <button onClick={ closeModal } className="text-gray-500 hover:text-gray-700">
                                <X size={ 24 } />
                            </button>
                        </div>
                        <div className="prose">
                            { detailedInfo }
                        </div>
                        <button
                            className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300"
                            onClick={ closeModal }
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            ) }
        </>
    );
};

export default CourseCard;