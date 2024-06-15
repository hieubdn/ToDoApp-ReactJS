import React, { useState } from 'react';
import UserTable from './component/UserTable'
import AddUser from './component/AddUser'
import EditUser from './component/EditUser'
import CurrentDateTime from './component/CurrentDateTime';
import data from './data'
function App() {
  const [users, setUsers] = useState(data);
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }
  const deleteUser = id => setUsers(users.filter(element => element.id !== id));
  const [edit, setEdit] = useState(false);
  const dataFrist = { id: null, name: '' };
  const [currenData, setCurrentData] = useState(dataFrist);
  const updateUser = newUser => {
    setUsers(users.map(user => (user.id === currenData.id) ? newUser : user));
    setEdit(false);
  }
  const editUser = (id, user) => {
    setEdit(true);
    setCurrentData({ id: id, name: user })
  }
  return (
    <div className='container'>
      <h1 className='text-center'> TO DO APP <span className='span-name'>By hiubdn</span></h1>
      <div className="App">
      <header className="App-header">
        <CurrentDateTime />
      </header>
    </div>
    <hr></hr>
      <div className='row'>
      {edit?(
        <div className='col-md-6 input'>
          <p>Chỉnh sửa</p>
          <EditUser
            setEdit = {setEdit}
            currenData = {currenData}
            updateUser = {updateUser}
           />
        </div>
      ):(
        <div className='col-md-6'>
          <p>Thêm mới công việc hôm nay</p>
          <AddUser addUser={addUser} />
        </div>
      )}
        <div className='col-md-6 list'>
          <p>Danh sách</p>
          <UserTable userTable={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
