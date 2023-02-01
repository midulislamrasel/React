import React from 'react';
import FoodData from '../../Foodorder.json';
import  './Service.css'

const Service = () => {
    return (
        <div className="foodStyle">
            {
                FoodData.map(food => {
                    return <div key ={food.id} > 
                                <div className='divFood'>
                                    <h1>ID: {food.id}</h1>
                                    <h3>Name:{food.Name}</h3>
                                    <img className='foodImg' src={food.img} alt="" /> <br />
                                    <button>Order Now</button>
                                </div>
                            </div>
                })
            }
        </div>
    );
};

export default Service;