import React from 'react';
import './Card.css';

const card = ({ name, height, mass, gender, birth_year }) => {
  return (
    <div className="tc bg-dark-gray dib pa3 ma2 grow bw2 shadow-5 br2">
      {/* <img alt='StarPeople' src='https://www.themainstreetmouse.com/wp-content/uploads/2017/12/https_2F2Fblueprint-api-production.s3.amazonaws.com2Fuploads2Fcard2Fimage2F6166162F00b648f5-ae81-488e-8f71-892211a1dff1.jpg'></img> */}
      <h2>Name: {name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Gender: {gender}</p>
      <p>Birthday: {birth_year}</p>
    </div>
  );
};

export default card;
