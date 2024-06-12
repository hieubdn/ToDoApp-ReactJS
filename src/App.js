import React, { useState } from 'react';
import UserTable from './component/UserTable'
import AddUser from './component/AddUser'
import EditUser from './component/EditUser'
import data from './data'
function App() {
  const [users, setUsers] = useState(data);
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }
  const deleteUser = id => setUsers(users.filter(element => element.id !== id))
  return (
    <div className='container'>
      <h1 className='text-center'> TO DO-APP BY HIEUBDN</h1>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Thêm mới</h2>
          <AddUser addUser={addUser} />
        </div>
        <div className='col-md-6'>
          <h2>Danh sách</h2>
          <UserTable userTable={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
