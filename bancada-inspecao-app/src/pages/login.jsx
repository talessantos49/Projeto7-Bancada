import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica simples de "login fake"
    if (usuario === 'admin' && senha === '1234') {
		localStorage.setItem('usuarioLogado', 'true'); // ← Aqui
		navigate('/'); // redireciona para a Home
    } else {
      alert('Usuário ou senha inválidos!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
