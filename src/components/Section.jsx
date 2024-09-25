import React from 'react';

const Section = ({ id, title, children, className = '' }) => (
    <section id={ id } className={ `py-20 ${className}` }>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{ title }</h2>
            { children }
        </div>
    </section>
);

export default Section;