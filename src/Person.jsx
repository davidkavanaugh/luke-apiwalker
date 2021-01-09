import React, { useEffect } from 'react';
import { navigate } from '@reach/router'
import NotFoundError from './NotFoundError'

const Person = props => {
    const { data, getData, setData } = props
    useEffect(() => {
        const fetchdata = async () => {
            try{
                const result = await getData("people", props.id)
                await setData(result.data)
            } catch(err) {
                if(err instanceof NotFoundError) {
                    navigate("/error")
                }
            }
        }
        fetchdata()
    }, [props.id])
    if(data.height) {
        return (
            <>
                <h1>{data.name}</h1>
                <p>Height: {data.height}</p>
                <p>Mass: {data.mass}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Skin Color: {data.skin_color}</p>
            </>
        )
    }
    return <></>;
}

export default Person