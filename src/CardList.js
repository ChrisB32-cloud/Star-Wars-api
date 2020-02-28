import React from 'react';
import Card from './Card'

const cardList = ({ starPeople }) => {

 

    return(

        <div>
        {
            starPeople.map((starPerson, i) => {
                return (<Card 
                    key={i} 
                    name={starPeople[i].name} 
                    height={starPeople[i].height} 
                    mass={starPeople[i].mass}
                    gender={starPeople[i].gender}
                    birth_year={starPeople[i].birth_year}
                     />
              );
             })
            }
        </div>
            
    );
    
}

export default cardList;