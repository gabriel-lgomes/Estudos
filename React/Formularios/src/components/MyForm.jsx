import { useState } from 'react'
import './MyForm.css'

function MyForm({user}) {
  
  
  // 6 - Controlled input
  // 3 - Gerenciamento de dados
  const [name, setName] = useState( user ? user.name : '');
  const [email, setEmail] = useState( user ? user.email : '' );
  const [bio, setBio] = useState( user ? user.bio : '' );
  const [role, setRole] = useState( user ? user.role : '' )

  // 4 - Alteração de state com função
  const handleName = (e) =>  {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário..");
    console.log(name, email, bio, role);

    // 7 - Limpar formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }


  return (
    <div>
      <h1>Forms</h1>
      {/* 5 - Envio de form  */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nome:</label>
        <input type='text' name='name' placeholder='Digite o seu nome' value={name} onChange={handleName} />
        
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* Simplificação do state */}
          <input type='email' name='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        
        {/* 7 - Textarea */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder='Descrição do usuário' ></textarea>
        </label>

        {/* 8 -  Select */}
        <label>
          <span>Função do sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="usuario">Usuário</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm