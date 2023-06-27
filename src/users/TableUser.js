import React from "react";
import SearchUser from "./SearchUser";

const TableUser =() => {
    const data = [
        'id 11',
        'id 21',
        'id 31',
        'id 41',
        'id 51',

    ];
    return (
        <div>
          <SearchUser data={data} />
          <table className="table">
            <thead>
                <tr>
                    <th> 11 </th>
                    <th> Mohanan</th>
                    <th> mohan@gmail.com </th>
                    <th> New Task </th>
                    <th> Mahesutha </th>
         
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>
          </table>

        </div>
    );
};

export default TableUser;