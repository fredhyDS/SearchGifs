import React from "react";
import '../components/GifGridItem.css';

export const GifGridItem = ({id,title,url,share}) => {
    
    return(
        <div className='item' >
            <div className='image'>
                <img src={ url } alt= { title } />
            </div> 
            <h4>
                { title }
                <a href={share} className='share' target='_blank' rel='noreferrer'>Share This</a>
                </h4> 
                  
        </div>
    );
}