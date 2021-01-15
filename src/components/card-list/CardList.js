import React from 'react';
import './CardList.scss';
import Card from '../cardItem/Card';

const CardList = ( { characters, onBookmarkChange, isBookmarkedFunction } ) => {
 
    

  


    return (
        <div className="cardList">
        {
            characters.map( (item,i) => {
                const isBookmarked = isBookmarkedFunction(item);
                return <Card key={i} element={item} isBookmarked={isBookmarked} onBookmarkChange={onBookmarkChange}/>
            })
        }  
        </div>
    );
} 

export default CardList;