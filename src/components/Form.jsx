import React, { Component } from "react";
import '../components/Form.css';


class Form extends Component  {
    
render() {
    return (
        <div className="container">
            <h1>Login</h1>
            <form action="" className="container-form">
                <div>
                    <label htmlFor="email">Email <br />
                    <input className="input" type="email"  id="email" required/>
                    </label>
                </div>
                <div>
                    <label htmlFor="password">Senha <br />
                    <input className="input" type="password" name="password" id="password" required />
                    </label>
                </div>
                <div className="form-check">
                    <input  type="checkbox" name="password-confirm" id="passwod-confirm" />
                    <a href="/">Esqueceu a senha?</a>
                </div>
                <br />
                <input type="button" value="LOGIN" />
            </form>
        </div>
    )

}}
export default Form;