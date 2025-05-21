import { Link } from 'react-router-dom';
import '../styles/sobre.css'; // Para aplicar estilos separados, opcional

export default function home() {
	return (
	<div>
		<h1>Sobre Esta Aplicação</h1>
		<p>
		Esta aplicação foi desenvolvida para ser uma Progressive Web App (PWA), que funciona em
		múltiplas plataformas, mesmo offline.
		</p>

		<h2>Principais Funcionalidades:</h2>
		<ul>
			<li>Leitura de dados via API</li>
			<li>Instalável em dispositivos móveis</li>
			<li>Compatível com múltiplos navegadores</li>
			<li>Interface amigável e responsiva</li>
		</ul>

		<br />
		<Link to="/">
			<button className="btn-voltar">Voltar à Home</button>
		</Link>
	</div>
	);
}