import React, { useContext } from "react";
import { CardContex } from "../../contexApi/Curdcontext/CurdContext";



const Add_Curd = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const profesion = form.profesion.value;
    const email = form.email.value;
    const user = {
      name,
      profesion,
      email,
    };
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">profesion</span>
              </label>
              <input
                type="name"
                placeholder="profesion"
                className="input input-bordered"
                name="profesion"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Curd;
