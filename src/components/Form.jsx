import React from "react";
import '../components/Form.css';


const Form = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <form action="" className="container-form">
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email"  id="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label> <br />
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-check">
                    <input type="checkbox" name="password-confirm" id="passwod-confirm" />
                    <a href="/">Esqueceu a senha?</a>
                </div>
                <br />
                <input type="button" value="LOGIN" />
            </form>
        </div>
    )

}
export default Form;