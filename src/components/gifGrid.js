import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
 
  const {data:images,loading} = useFetchGifs(category);


    return(
        <>
            <h3 className='catTitle'>{category}</h3>
            {loading && <p className='item animate__animated item animate__animated'>Loading...</p>} 
            <div className='groupCategory item animate__animated animate__fadeIn'>                                 
                {
                    images.map( img => 
                        (
                        <GifGridItem 
                            key={img.id}                           
                            {...img} 
                        />
                        )
                    )
                }
            </div>
        </>
    );

}