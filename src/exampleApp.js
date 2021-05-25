import React, { useState } from 'react';
import  {AddCategory} from './components/AddCategories';
import { GifGrid } from './components/gifGrid';


export const Example = () => {
    const [categories, setCategories] = useState(['Bomfunk MC']);
    
    return(
        <main>
        <h2 className='mainTitle'>GIFS SEARCH</h2>
        
        <AddCategory setCategories={setCategories}/>
        
            {
                categories.map( category => (
                    <GifGrid 
                    category = {category}
                    key = {category}
                    />
                ))
            }
        
        </main>
    );
}

