// CSS
import styles from "./Register.module.css"

import { useState, useEffect } from "react"

function Register() {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError("As senhas estão diferentes!");
      return
    }

    console.log(user);

  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" placeholder="Nome do usuário" required value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="email" placeholder="E-mail do usuário" required value={email} onChange={(e) => setEmail(e.target.value)}  />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" placeholder="Senha do usuário" required value={password} onChange={(e) => setPassword(e.target.value)}  />
        </label>
        <label>
          <span>Confirmar senha:</span>
          <input type="password" name="confirmPassword" placeholder="Confirme a senha do usuário" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
        </label>
        <button className="btn">Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register