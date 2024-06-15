import React, { useState } from 'react';

function UserTable(props) {
  return (
    <div className='table-output'>
      <table className='table'>
        <thead> {/* sử dụng để nhóm các hàng tiêu đề (header) trong một bảng */}
          <tr> {/* sử dụng để định nghĩa một hàng (row) trong bảng  */}
            <td>ID</td>
            <td>Task</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.userTable.length > 0 ? (
            props.userTable.map((el, index) => { // Thêm index làm key cho mỗi hàng
              const { id, name } = el;
              return (
                <tr key={index}> {/* Sử dụng index làm key */}
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>
                    <button className='btn btn-action btn-primary' onClick={() =>props.editUser(id, name)}>Sửa</button>
                    <button className='btn btn-action btn-danger' onClick={() =>props.deleteUser(id)}>Xóa</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3">ERRO: Hiện tại không có data hiển thị</td> {/* Hiển thị thông báo trong một hàng */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
