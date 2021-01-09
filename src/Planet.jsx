import React, { useEffect } from 'react';
import { navigate } from '@reach/router'
import NotFoundError from './NotFoundError'

const Planet = props => {
    const { data, getData, setData } = props
    useEffect(() => {
        const fetchdata = async () => {
            try{
                const result = await getData("planets", props.id)
                await setData(result.data)
            } catch(err) {
                if(err instanceof NotFoundError) {
                    navigate("/error")
                }
            }
        }
        fetchdata()
    }, [props.id])
    if(data.climate) {
        return (
            <>
                <h1>{data.name}</h1>
                <p>Climate: {data.climate}</p>
                <p>Terrain: {data.terrain}</p>
                <p>Surface Water: {data.surface_water}</p>
                <p>Population: {data.population}</p>
            </>
        )
    }
    return <></>;
}

export default Planet