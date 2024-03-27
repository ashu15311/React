import Axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

const baseURL = 'https://dummyapi.online/api/users';

function GetAxios() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        Axios.get(baseURL).then((response) => {
            setMyData(response.data);
        })
    }, [])
    return (
        <>
            {
                myData.map((item) => {
                    const { id, name, email } = item;
                    return (
                        <div className='data'>
                            <h6>{id}</h6>
                            <h6>{name}</h6>
                            <h6>{email}</h6>
                        </div>
                    )
                })
            }
            {/* <h1>{myData.id}</h1>
            <h1>{myData.name}</h1>
            <h1>{myData.email}</h1> */}
        </>
    )
}

export default GetAxios;