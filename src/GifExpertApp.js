import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    const [categoria, setcategoria] = useState(['Goku']);

    // const handleAdd = () => {
    //     const nombre = 'Johna';
        
        
        
    //     setcategoria(categ =>[...categoria, nombre])
    // }


    return (
        <>
            <h1>
                GifExpertApp
                <AddCategory setcategoria={setcategoria}/>
            </h1>
            <hr />


            <ol>
                {
                    categoria.map(category => {
                        return  <GifGrid 
                            key={category} 
                            category={category}/>
                    })
                }
            </ol>
        </>
    )
}
