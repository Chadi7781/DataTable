import React, { useState, useEffect } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";

const DataList = () => {
  const [userList, setUserList] = useState([]);

  const columns = [
    {
      dataField: "id",
      text: "Id"
    },
    {
      dataField: "name",
      text: "Name",
      sort: true
    },
    {
      dataField: "username",
      text: "Username",
      sort: true
    },
    {
      dataField: "email",
      text: "Email",
      sort: true
    }
  ];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={userList}
      />
      {/* <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        {userList && userList.length > 0 ? (
          userList.map((usr) => (
            <tr>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.username}</td>
              <td>{usr.email}</td>
            </tr>
          ))
        ) : (
          <h1>'Loading'</h1>
        )}
      </table> */}
    </div>
  );
};

export default DataList;
