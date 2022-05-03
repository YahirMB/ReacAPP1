import React from 'react'
import { useFetchGifs } from '../hooks/useFechGif'
//import { getGif } from '../crud/get'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {


  const {data:images,loading} =  useFetchGifs(category)

   

    // useEffect(() => {
    //     getGif(category).then(setimages)
    // }, [category])








    return (
        <>
            <h1 className='title animate__animated animate__rubberBand'>
                {category}
            </h1>

            <h1 className='animate__animated animate__flash'>{loading && 'Cargando..'}</h1>
            <div className='card-grid'>



                {images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img} />
                ))}
            </div>
        </>
    )
}
