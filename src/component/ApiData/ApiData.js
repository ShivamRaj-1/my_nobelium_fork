import axios from 'axios';
import React, { useState, useEffect } from 'react';

import AD from './ApiData.module.css'

const url = "https://jsonplaceholder.typicode.com/posts";

export default function ApiData() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data)
                // console.log(res.data);
            })
    }, [])

    function handleDelete(i) {
        data.splice(i, 1)
        setData([...data])
    }


    return (
        <div className={AD.main_container}>
            <h1>Api Data:</h1>

            {
                data.length === 0 ? (
                    <Loading />
                ) : (
                    <DataTable
                        data={data}
                        handleDelete={handleDelete}
                    />
                )
            }

        </div>
    )
}


function DataTable(props) {
    const { data, handleDelete } = props;

    return (
        <table >
            <thead>
                <tr>
                    <th>Sno.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((value, ind) => {
                        return (
                            <DataRow
                                element={value}
                                handleDelete={handleDelete}
                                index = {ind}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

function DataRow(props) {
    const { element, handleDelete, index  } = props;

    return (
        <tr key={element.id}>
            <td>{index + 1}</td>
            <td>{element.title}</td>
            <td>{element.body}</td>
            <td onClick={() => handleDelete(index)}>❌</td>
        </tr>

    )
}


function Loading() {
    return (
        <h1>Loading...</h1>
    )
}
