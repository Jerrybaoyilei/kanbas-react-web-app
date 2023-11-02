import React, { useState } from 'react';

function StringStateVariables() {
    const [name, setName] = useState('Mary');
    const [age, setAge] = useState(20);
    const [address, setAddress] = useState('123 Main Street');
    const [city, setCity] = useState('Anytown');
    const [state, setState] = useState('CA');
    const [zip, setZip] = useState('12345');
    const [phone, setPhone] = useState('123-456-7890');

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    return (
        <div>
            <h2>String State Variables</h2>
            <h5>Name: {name}</h5>
            <input value={name} onChange={handleNameChange} />
            <h5>Address: {address}</h5>
            <input value={address} onChange={(event) => setAddress(event.target.value)} />
            <h5>City: {city}</h5>
            <input value={city} onChange={(event) => { setCity(event.target.value) }} />
        </div>
    )
}

export default StringStateVariables;