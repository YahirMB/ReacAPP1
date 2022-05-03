import { useEffect, useState } from "react"
import { getGif } from "../crud/get"



export const useFetchGifs = (category) => {

    const [state, setstate] = useState(
        {
            data: [],
            loading: true

        })
    useEffect(() => {

        getGif(category).then(imgs => {

            setTimeout(()=>{

               
                setstate({
                    data: imgs,
                    loading: false
                })

            },1500);
           
        })

    }, [category])


    return state;
}

