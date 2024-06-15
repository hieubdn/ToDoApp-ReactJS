import React, { useState } from 'react';

function AddUser(props) {
    const dataFirst = { id: null, name: '' };
    const [user, setUser] = useState(dataFirst);
    const changeInput = event => {
        console.log(event);
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();
        if (user.name) {
            props.addUser(user)
            setUser(dataFirst);
        }
    }
    return (
        <div>
            <form>
                <textarea name="name" type='text' onChange={changeInput} value={user.name} className='form-control'> </textarea>                
                <button className='btn btn-info' onClick={submitForm}>Thêm mới</button>
            </form>
        </div>
    );
}

export default AddUser;