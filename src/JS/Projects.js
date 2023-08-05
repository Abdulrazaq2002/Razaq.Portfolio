import React from "react";
import "../CSS/Project.css";

function Projects() {
  return (
    <>
      <h2 className='p-demo'>Portfolio</h2>
      <p className='line'>Each project is a unique piece of development </p>
      <div className='projects'>
        <div className='box'>
          <div className='image-container'>
            <img
              className='carimg'
              src='../Imgs/Book-Your-Trip.png'
              alt='Book Your Trip'
            />
          </div>
          <div className='left-section'>
            <h3>BOOK YOUR TRIP</h3>
            <h2>About</h2>
            <h3>
              This Web Page is a demo to show how the front-end of a traveling
              booking web page looks and how it can be used to book trips.
            </h3>
            <a
              href='https://abdulrazaq2002.github.io/Book-Your-Trip/home'
              target='_blank'
              rel='noopener noreferrer'>
              View Demo
            </a>
          </div>
        </div>
        <hr />
        <div className='box'>
          <div className='image-container'>
            <img
              className='carimg'
              src='../Imgs/Car-Rental.png'
              alt='Car Rental'
            />
          </div>
          <div className='left-section'>
            <h3>CAR RENTAL</h3>
            <h2>About</h2>
            <h3>
              This Web Page is a demo to show how the front-end of a car booking
              web page looks and how it can be used to book rental cars.
            </h3>
            <a
              href='https://abdulrazaq2002.github.io/car-rental-app/home'
              target='_blank'
              rel='noopener noreferrer'>
              View Demo
            </a>
          </div>
        </div>
        <hr />
        <div className='box'>
          <div className='image-container'>
            <img
              className='carimg'
              src='../Imgs/Fashion-Shopping.png'
              alt='Fashion Shopping'
            />
          </div>
          <div className='left-section'>
            <h3>FASHION SHOPPING</h3>
            <h2>About</h2>
            <h3>
              This Web Page is a demo to show how the front-end of a fashion
              shopping web page looks and how it can be used to order fashion
              items.
            </h3>
            <a
              href='https://abdulrazaq2002.github.io/Fashion-Shopping/home'
              target='_blank'
              rel='noopener noreferrer'>
              View Demo
            </a>
          </div>
        </div>
        <hr />
        <div className='box'>
          <div className='image-container'>
            <img
              className='carimg'
              src='../Imgs/Shoe-Shop.png'
              alt='Shoe Shop'
            />
          </div>
          <div className='left-section'>
            <h3>SHOE SHOP</h3>
            <h2>About</h2>
            <h3>
              This Web Page is a demo to show how the front-end of a shoe
              shopping web page looks and how it can be used to buy shoes.
            </h3>
            <a
              href='https://abdulrazaq2002.github.io/Shoe-Shop/home'
              target='_blank'
              rel='noopener noreferrer'>
              View Demo
            </a>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Projects;
