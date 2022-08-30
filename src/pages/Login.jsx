import React from "react";

const Login = () => {
  return (
    <div className="login-div">
      <form className="login-form m-auto  my-4 p-4 rounded-3">
        <div class="mb-3">
          <label for="firstName" class="form-label">
            First Name
          </label>
          <input type="text" class="form-control" id="firstName" />
        </div>
        <div class="mb-3">
          <label for="surname" class="form-label">
            Surname
          </label>
          <input type="text" class="form-control" id="surname" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
