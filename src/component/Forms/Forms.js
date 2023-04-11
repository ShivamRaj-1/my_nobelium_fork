import React, { useState, useRef } from 'react'
import FS from './Forms.module.css'

export default function Forms() {

    const userData = useRef([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [lang, setLang] = useState("")

    const [show, setShow] = useState(false)



    function handleDelete(i) {
        userData.current.splice(i, 1)
        userData.current = [...userData.current]
        setShow(!show)
    }

    function handleAdd(e) {
        e.preventDefault()

        const newData = [...userData.current, { 'name': name, 'email': email, 'age': age, 'lang': lang }]
        userData.current = newData
        setShow(!show)

        setName("")
        setEmail("")
        setAge("")
        setLang("")
    }
    // console.log(userData)


    return (
        <div className={FS.main_background}>

            <section className={FS.top_section}>

                <div className={FS.left_form}>
                    <form>
                        <table cellSpacing='5px'>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td><input type="number" value={age} onChange={(e) => setAge(e.target.value)} required /></td>
                                </tr>
                                <tr>
                                    <td>Languages:</td>
                                    <td><input type="text" value={lang} onChange={(e) => setLang(e.target.value)} required /></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type='submit' onClick={(e) => handleAdd(e)}>ADD</button>
                    </form>
                </div>

                <div className={FS.right_form}>
                    <form>

                        <table cellSpacing='5px'>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td>{age}</td>
                                </tr>
                                <tr>
                                    <td>Language:</td>
                                    <td>{lang}</td>
                                </tr>
                            </tbody>
                        </table>

                    </form>
                </div>

            </section>

            <section className={FS.bottom_section}>
                <table >

                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Languages</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userData.current.map((value, ind) => {
                                return (
                                    <tr key={value.name}>
                                        <td>{ind + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.age}</td>
                                        <td>{value.lang}</td>
                                        <td>
                                            <button>update</button>
                                            <button onClick={() => handleDelete(ind)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>

        </div>
    )
}


