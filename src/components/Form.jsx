import React from "react";
import "../components/Form.css";

export function Form () {
  
    return (
      <div className="container">
        <h1>Login</h1>
        <form action="" className="container-form">
          <div className="input-column">
            <label htmlFor="email" >Email</label>
            <input className="input" type="email" id="email" required />
          </div>
          <div className="input-column">
            <label htmlFor="password">Senha</label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="form-check">
            <div className="terms">
              <input
                type="checkbox"
                name="password-confirm"
                id="passwod-confirm"
              />
              <span>Termos</span>
            </div>
            <a className="forgot-password" href="/">
              Esqueceu a senha?
            </a>
          </div>
          <br />
          <button className="btn" >LOGIN</button>
        </form>
      </div>
    );
  
}
