import React, { useContext } from 'react'
import { Listcontext } from './PostApi'
import post from './Post.module.css'

export default function RightApi() {

    const { show, currenitem } = useContext(Listcontext)
    return (
        <div className={post.right_container}>
            <h1>Post Details</h1>
            <table>
                <tbody >
                    {show.filter((fitem) => fitem.id === currenitem).map((fditem) => {
                        return (
                            <tr>
                                <td>
                                    <p> Id : {fditem.id}</p>
                                    <p> Description: {fditem.body}</p>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>


        </div>
    )
}