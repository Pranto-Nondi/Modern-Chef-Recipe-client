
import React, { useState, useEffect } from 'react';
import Chefs from '../Chef/Chefs';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (

                <div
                    className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
                    style={{ zIndex: 9999 }}
                >
                    <div>
                        <button className="btn loading btn-primary">loading</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat p-3" style={{ backgroundImage: `url(${'https://i.ibb.co/54JFnLQ/bgImg.jpg'})` }}>
                        <div className="max-w-xl w-full px-4 sm:px-6 lg:px-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-center">Welcome to Dish Discovery</h1>
                            <p className="mt-4 sm:mt-6 lg:mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-tight text-center">Our  Food Artisan and their dish is the world wide famous to cook the serve of best products and world class food </p>
                            <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
                                <button className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">Explore Now</button>
                            </div>
                        </div>
                    </div>
                    <Chefs></Chefs>
                   
                </>
            )}
        </>
    );
};

export default Home;

