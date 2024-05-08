import React from 'react';
import HeadContent from '../../HeadContent/HeadContent';
import './Register.css';

const Register = () => {
  return (
    <>
      <HeadContent />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 register-container">
            <div className="register-header">
              <h2>Register</h2>
              <p className="lead">Create your account</p>
            </div>

            <form action="/register" method="post" noValidate>
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

              <div className="mb-3">
                <label htmlFor="pass_confirm" className="form-label">Confirm Password</label>
                <input type="password" name="pass_confirm" id="pass_confirm" className="form-control" />
                {/* Hata mesajı */}
              </div>

              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary btn-lg">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;