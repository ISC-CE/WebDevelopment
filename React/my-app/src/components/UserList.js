// src/components/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const API_BASE_URL = `${process.env.REACT_APP_API_URL}`;

  useEffect(() => {
    // Fetch the list of users from the API endpoint
    axios
      .get(`${API_BASE_URL}/users`)
      .then((response) => {
        // console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleEdit = (userId) => {
    setEditingUserId(userId);
    const userToEdit = users.find((user) => user.id === userId);
    setEditedUser(userToEdit);
    // Send a PATCH request to the "Update User" endpoint with 'editedUser'
    axios
      .patch(`${API_BASE_URL}/users/${editingUserId}`, editedUser)
      .then(() => {
        // Successfully updated user
        setEditingUserId(null);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleDelete = (userId) => {
    // Send a DELETE request to the "Delete User" endpoint
    axios
      .delete(`${API_BASE_URL}/users/${userId}`)
      .then(() => {
        // Successfully deleted user, remove the user from the list
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button
                  onClick={() => handleEdit(user.id)}
                  className="btn btn-primary"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
