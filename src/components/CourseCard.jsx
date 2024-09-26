import React, { useState } from 'react';
import { X } from 'lucide-react';

const CourseCard = ({ title, description, icon: Icon, detailedInfo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="p-6 text-center transition duration-500 transform bg-white rounded-lg shadow-md hover:scale-105">
                <Icon className="w-16 h-16 mx-auto mb-4 text-indigo-500" />
                <h3 className="mb-2 text-xl font-semibold">{ title }</h3>
                <p>{ description }</p>
                <button
                    className="px-4 py-2 mt-4 text-white transition duration-300 bg-indigo-500 rounded hover:bg-indigo-600"
                    onClick={ openModal }
                >
                    Подробнее
                </button>
            </div>

            { isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">{ title }</h2>
                            <button onClick={ closeModal } className="text-gray-500 hover:text-gray-700">
                                <X size={ 24 } />
                            </button>
                        </div>
                        <div className="prose">
                            { detailedInfo }
                        </div>
                        <button
                            className="px-4 py-2 mt-6 text-white transition duration-300 bg-indigo-500 rounded hover:bg-indigo-600"
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