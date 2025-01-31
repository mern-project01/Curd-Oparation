import React, { useEffect, useState } from 'react';

const Curd = () => {
     const [users, setUsers] = useState([]);
     useEffect(() => {
       fetch("http://localhost:5000/users")
         .then((res) => res.json())
         .then((data) => setUsers(data));
     }, []);
    return (
      <div className='grid grid-cols-3 mx-3 gap-4'>
        {users.map((user) => (
          <div className="card bg-base-100 shadow-sm ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{user.name} </h2>
              <p>
              {user.email}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Curd;