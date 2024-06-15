import React, { useState, useEffect } from 'react';

function EditUser(props) {
    useEffect(() => {
        setUser(props.currenData)
    }, [props]);
    const dataFirst = { id: null, name: '' };
    const [user, setUser] = useState(props.currenData);
    const changeInput = event => {
        console.log(event);
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();
        if (user.name) {
            props.updateUser(user)
        }
    }
    return (
        <div>
            <form>
                <textarea name="name" type='text' onChange={changeInput} value={user.name} className='form-control'> </textarea>
                <button className='btn btn-info' onClick={submitForm}>Update</button>
            </form>
        </div>
    );
}

export default EditUser;