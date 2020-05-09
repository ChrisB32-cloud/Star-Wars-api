import React from 'react';
import Card from './Card';

const cardList = ({ starPeople }) => {
  return (
    <div>
      {starPeople.map((starPerson, i) => {
        return (
          <Card
            key={i}
            name={starPerson[i].name}
            height={starPerson[i].height}
            mass={starPerson[i].mass}
            gender={starPerson[i].gender}
            birth_year={starPerson[i].birth_year}
          />
        );
      })}
    </div>
  );
};

export default cardList;
