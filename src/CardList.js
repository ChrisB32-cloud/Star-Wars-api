import React from 'react';
import Card from './Card';

const cardList = ({ starPeople }) => {
  return (
    <div>
      {starPeople.map((person, i) => {
        return (
          <Card
            key={i}
            name={person.name}
            height={person.height}
            mass={person.mass}
            gender={person.gender}
            birth_year={person.birth_year}
          />
        );
      })}
    </div>
  );
};

export default cardList;
