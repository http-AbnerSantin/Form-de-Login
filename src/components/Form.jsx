import React, { useState } from "react";
import "../components/Form.css";

export function Form () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState({
    email:null,
    senha:null,
  })
   const verificacao = () =>{
    if(!email) {
      setErro({
        ...erro,
        email:'Campo obrigatório',
        
      })
    }
    if(!password) {
      setErro({
        ...erro, 
        senha:'campo obrigatório'})
    }
    return;
  }  
  
  
    return (
      <div className="container">
        <h1>Login</h1>
        <form action="" className="container-form">
          <div className="input-column">
            <label htmlFor="email" >Email</label>
            <input className="input" type="email" id="email" placeholder="Seu email" required 
            value={email} onChange={(e) => setEmail(console.log (e.target.value))} />
            {erro.email && <p>{erro.email}</p> }
          </div>
          <div className="input-column">
            <label htmlFor="password">Senha</label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              required
            />
            {erro.senha && <p className="erro">{erro.senha}</p> }
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
          <button onClick={verificacao} className="btn" >LOGIN</button>
        </form>
      </div>
    );
  
}
