import React, { useRef, useState } from 'react'
import "./header.css"

const Header = () => {

    const [fullName, setFullName] = useState('')
    const [brithday, setBrithday] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [gender, setGender] = useState('')
    const [occupation, setOccupation] = useState('')

    const [data, setData] = useState([])

    const idType = useRef(null)
    const idNumber = useRef(null)
    const authorite = useRef(null)
    const dataRef = useRef(null)
    const stateRef = useRef(null)
    const explryData = useRef(null)

    const handleCreate = () => {
    if(!fullName.trim() || !email.trim()) return null

        const information = {
            id: new Date().getTime(),
            fullName,
            brithday,
            email,
            number,
            gender,
            occupation,

            idType: idType.current.value,
            idNumber: idNumber.current.value,
            authorite: authorite.current.value,
            dataRef: dataRef.current.value,
            stateRef: stateRef.current.value,
            explryData: explryData.current.value,
        }

        setData([...data, information])
        setFullName('')
        setBrithday('')
        setEmail('')
        setNumber('')
        setGender('')
        setOccupation('')

         idType.current.value = "",
         idNumber.current.value = "",
         authorite.current.value = "",
         dataRef.current.value = "",
         stateRef.current.value = "",
         explryData.current.value = ""

    }

    return (
        <section>
            <div className='inputCard'>
                <h2>Registration</h2>
                <hr />
                <form action="">
                    <div className='inputFlex'>
                        <input type="text"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            required
                            placeholder='Enter your name' />
                        <input type="text"
                            onChange={(e) => setBrithday(e.target.value)}
                            value={brithday}
                            required
                            placeholder='Enter brith date' />
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            placeholder='Enter your email' />
                    </div>

                    <div className='inputFlex'>
                        <input type="text"
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            required
                            placeholder='Enter mobile number' />
                        <input type="text"
                            onChange={(e) => setGender(e.target.value)}
                            value={gender}
                            required
                            placeholder='Enter your gender' />
                        <input type="text"
                            onChange={(e) => setOccupation(e.target.value)}
                            value={occupation}
                            required
                            placeholder='Enter occupation' />
                    </div>
                    <h2 className='title'>Identity Detalist</h2>
                    <hr />

                    <div className='inputFlex'>
                        <input type="number" ref={idType} required  placeholder='Enter ID type' />
                        <input type="number" ref={idNumber} required  placeholder='Enter ID number' />
                        <input type="text" ref={authorite} required  placeholder='Enter issue department' />
                    </div>

                    <div className='inputFlex'>
                        <input type="date" ref={dataRef} required placeholder='Enter ID issue date' />
                        <input type="text" ref={stateRef} required  placeholder='Enter ID issue state' />
                        <input type="date" ref={explryData} required  placeholder='Enter ID expiry date' />
                    </div>
                    <button className='btn' onClick={handleCreate} type='submit'>Next</button>
                </form>
            </div>
            <div>
                <table border="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead className='thead'>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Birthday</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Gender</th>
                            <th>Occupation</th>
                            <th>ID Type</th>
                            <th>ID Number</th>
                            <th>Authorite</th>
                            <th>Data Ref</th>
                            <th>State Ref</th>
                            <th>Expiry Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.fullName}</td>
                                <td>{item.brithday}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.gender}</td>
                                <td>{item.occupation}</td>
                                <td>{item.idType}</td>
                                <td>{item.idNumber}</td>
                                <td>{item.authorite}</td>
                                <td>{item.dataRef}</td>
                                <td>{item.stateRef}</td>
                                <td>{item.explryData}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Header

