// Teacher Card component
const TeacherCard = ({ name, language, experience, image }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
        <img src={ image } alt={ name } className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
        <h3 className="text-xl font-semibold mb-2">{ name }</h3>
        <p className="text-indigo-600 mb-2">{ language }</p>
        <p className="text-gray-600">Опыт: { experience }</p>
    </div>
);

export default TeacherCard