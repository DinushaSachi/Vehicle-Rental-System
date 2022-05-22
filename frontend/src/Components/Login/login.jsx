import React, { useState } from "react";
import "../Login/login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    cusUserName: "",
    cusPassword: "",

    staffUserName: "",
    staffPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Cuslogin = () => {
    axios
      .post("http://localhost:8070/ApplicationManagement/cuslogin", user)
      .then((res) => {
        alert("successfully signin");
        window.location = "/cushome";
      })
      .catch((err) => {
        alert("incorrect user name or password");
      });
  };

  const Stafflogin = () => {
    axios
      .post("http://localhost:8070/ApplicationManagement/stafflogin", user)
      .then((res) => {
        alert("successfully signin");
        window.location = "/staffhome";
      })
      .catch((err) => {
        alert("incorrect username or password");
      });
  };

  return (
    <div class="loginhero">
      <h1 style={{}}>Vehicle Rental System</h1>
      <table>
        <tr>
          <th>
            <img
              alt=""
              class="logo"
              height="450px"
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
              style={{
                marginRight: "50px",
                marginLeft: "100px",
                marginTop: "50px",
              }}
            />
          </th>
          <th>
            <div class="loginwrapper">
              <div class="logincontainer">
                <div class="col-left">
                  <div class="login-text">
                    <img
                      src="https://www.cellutrak.ca/wp-content/uploads/2020/11/car-rental.png"
                      alt="logo"
                      width="150px"
                      height="100px"
                      class="logo"
                    />
                    <p>
                      We love to provide a greate service for you. We are always
                      willing to provide the best service for You..Welocome!!!
                    </p>
                    <a class="loginbtn" href="">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-right">
                  <div class="login-form">
                    <h2>Customer Login</h2>
                    <form>
                      <p>
                        <input
                          type="text"
                          placeholder="Username"
                          name="cusUserName"
                          value={user.cusUserName}
                          onChange={handleChange}
                          required
                        />
                      </p>
                      <p>
                        <input
                          type="password"
                          placeholder="Password"
                          name="cusPassword"
                          value={user.cusPassword}
                          onChange={handleChange}
                          required
                        />
                      </p>
                      <p>
                        <input
                          class="loginbtn"
                          type="submit"
                          value="SignIn "
                          onClick={Cuslogin}
                        />
                      </p>
                      <p>
                        <a href="">Forget password?</a>
                        <a href="">Create an account.</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </table>

      <tr>
        <th>
          <div class="loginwrapper">
            <div class="logincontainer">
              <div class="col-left">
                <div class="login-text">
                  <img
                    src="https://www.cellutrak.ca/wp-content/uploads/2020/11/car-rental.png"
                    alt="logo"
                    width="150px"
                    height="100px"
                    class="logo"
                  />
                  <p>
                    You are the strength of our Company. We are always willing
                    to provide the best service for You..Welocome!!!
                  </p>
                  <a class="loginbtn" href="">
                    Read More
                  </a>
                </div>
              </div>
              <div class="col-right">
                <div class="login-form">
                  <h2>Staff Login</h2>
                  <form>
                    <p>
                      <input
                        type="text"
                        placeholder="Username"
                        name="staffUserName"
                        value={user.staffUserName}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <input
                        type="password"
                        placeholder="Password"
                        name="staffPassword"
                        value={user.staffPassword}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <input
                        class="loginbtn"
                        type="submit"
                        value="SignIn"
                        onClick={Stafflogin}
                      />
                    </p>
                    <p>
                      <a href="">Forget password?</a>
                      <a href="">Create an account.</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </th>
        <th>
          <img
            src="https://preview.colorlib.com/theme/bootstrap/login-form-08/images/undraw_file_sync_ot38.svg"
            alt=""
            class="logo"
            height="400px"
            style={{
              marginRight: "20px",
              marginLeft: "30px",
              marginTop: "100px",
            }}
          />
        </th>
      </tr>
    </div>
  );
};

export default Login;
