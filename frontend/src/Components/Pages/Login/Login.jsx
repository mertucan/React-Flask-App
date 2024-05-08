import React from 'react';
import HeadContent from '../../HeadContent/HeadContent';
import '../Login/Login.css';

const Login = () => {
  return (
    <>
      <HeadContent />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 login-container">
            <div className="login-header">
              <h2>Login</h2>
              <p className="lead">Sign in to your account</p>
            </div>

            <form action="/login" method="post" noValidate>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="username" id="username" className="form-control" />
                {/* Hata mesajı */}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" />
                {/* Hata mesajı */}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label d-block">Password</label>
                <div className="d-flex">
                  <input type="password" name="password" id="password" className="form-control" />
                </div>
                {/* Hata mesajı */}
              </div>

              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
