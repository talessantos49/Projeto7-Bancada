import { Outlet, Link } from 'react-router-dom';
import '../styles/layout.css'; // Se quiser estilos

export default function Layout() {
	return (
		<div className="layout">
			<header>
				<h1>Bancada de Inspeção</h1>
				<nav>
					<Link to="/">Home</Link> | <Link to="/610">Orbital 610</Link> | <Link to="/810">Orbital 810</Link> | <Link to="/870">Orbital 870</Link> | <Link to="/1000">Orbital 1000</Link> | <Link to="/config">Configurações</Link> | <Link to="/calib"> Calibração</Link> | <Link to="/cliente">Cliente</Link>
					<button
						onClick={() => {
							localStorage.removeItem('usuarioLogado');
							window.location.href = '/login'; // força redirecionamento
						}}
					>Sair</button>
				</nav>
				<br/>
				<nav>
					<label className="toggle-container">
						<input type="checkbox" className="toggle-checkbox"/>
						<div className="toggle-slider"></div>
						<div className="toggle-labels">
							<span className="manual">Manual</span>
							<span className="automatico">Automático</span>
						</div>
					</label>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>&copy; Kerotanz - 2025 - Todos os direitos reservados</p>
			</footer>
		</div>
	);
}
