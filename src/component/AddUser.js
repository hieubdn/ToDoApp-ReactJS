import React, {useState} from 'react';

function AddUser(props) {
    const dataFirst = {id:null, name:'' };
    const [user, setUser] = useState(dataFirst);
    const changeInput = event =>{
        console.log(event);
        const {name, value} = event.target;
        setUser({...user, [name]:value});
    }

    const submitForm = event =>{
        event.preventDefault();
        if (user.name){
            props.addUser(user)
        }
    }
    return (
        <div>
            <form>
                <lable>Name</lable>
                <input name="name" type='text' onChange={changeInput} value={user.name} className='form-control'/>
                <button className='btn btn-info' onClick={submitForm}>Thêm mới</button>
            </form>
        </div>
    );
}

export default AddUser;