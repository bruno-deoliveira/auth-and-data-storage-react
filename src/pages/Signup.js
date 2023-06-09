import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit (element) {
    element.preventDefault();

    setLoading(true);

    if (password.length < 6){
      alert ("Password deve ter no minimo 6 caracteres");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword){
      alert ("As senhas não conferem");
      setLoading(false);
      return;
    }

    try {
      await signUp(email, password);  
    }catch (error) {
      alert("Ocorreu um erro ao tentar criar o usuário");
    }

    setLoading(false);
  }  

  return (
    <div className="container">
      <h2>Cadastro de usuário</h2>

      <form onSubmit={handleSubmit}>
        <label> Email</label>
        <input
          type="email"
          value={email}
          onChange={(element) => setEmail(element.target.value)}
        />

        <label> Senha </label>
        <input
          value={password}
          type="password"
          onChange={(element) => setPassword(element.target.value)}
        />

        <label> Confirmação de senha </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(element) => setConfirmPassword(element.target.value)}
        />

        <button disabled={loading} className="button-block" type="submit">
          Signup
        </button>
      </form>
      <div className="center">
        <div>
          <p>
            Já possui uma conta? <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}