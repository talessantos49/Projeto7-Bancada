import { Outlet, Link } from 'react-router-dom';
import '../styles/layout.css'; // Se quiser estilos
import { useLocation } from "react-router-dom";

export default function Layout() {
	const location = useLocation();
	const getPageTitle = (path) => {
		switch (path) {
			case "/": return "Home";
			case "/610": return "Orbital 610";
			case "/810": return "Orbital 810";
			case "/870": return "Orbital 870";
			case "/1000": return "Orbital 1000";
			case "/config": return "Configurações";
			case "/calib": return "Calibração";
			case "/cliente": return "Cliente";
		    default: return "";
  		}
	};
	const pageTitle = getPageTitle(location.pathname);

	return (
		<div className="layout">
			{/* <header>
				<nav>
					<Link to="/">Home</Link> | <Link to="/610">Orbital 610</Link> | <Link to="/810">Orbital 810</Link> | <Link to="/870">Orbital 870</Link> | <Link to="/1000">Orbital 1000</Link> | <Link to="/config">Configurações</Link> | <Link to="/calib"> Calibração</Link> | <Link to="/cliente">Cliente</Link>
					<button
						onClick={() => {
							localStorage.removeItem('usuarioLogado');
							window.location.href = '/login'; // força redirecionamento
						}}
					>Sair</button>
				</nav>
			</header> */}
				<header>
					<nav className="topbar">
						<div className="page-title">{pageTitle}</div>
							<Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
							<Link to="/610" className={location.pathname === "/610" ? "active" : ""}>Orbital 610</Link>
							<Link to="/810" className={location.pathname === "/810" ? "active" : ""}>Orbital 810</Link>
							<Link to="/870" className={location.pathname === "/870" ? "active" : ""}>Orbital 870</Link>
							<Link to="/1000" className={location.pathname === "/1000" ? "active" : ""}>Orbital 1000</Link>
							<Link to="/config" className={location.pathname === "/config" ? "active" : ""}>Configurações</Link>
							<Link to="/calib" className={location.pathname === "/calib" ? "active" : ""}>Calibração</Link>
							<Link to="/cliente" className={location.pathname === "/cliente" ? "active" : ""}>Cliente</Link>
							<button
							onClick={() => {
								localStorage.removeItem('usuarioLogado');
								window.location.href = '/login';
							}}
							>
							Sair
							</button>
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

{/* <nav>
	<label className="toggle-container">
		<input type="checkbox" className="toggle-checkbox"/>
		<div className="toggle-slider"></div>
		<div className="toggle-labels">
			<span className="manual">Manual</span>
			<span className="automatico">Automático</span>
		</div>
	</label>
</nav> 
////CSS do botão de manual e automatico

.toggle-container {
position: relative;
display: inline-block;
width: 200px;
height: 40px;
background-color: #e0e0e0;
border-radius: 20px;
cursor: pointer;
transition: all 0.3s;
}

.toggle-checkbox {
display: none;
}

.toggle-slider {
position: absolute;
width: 50%;
height: 100%;
background-color: #fff;
border-radius: 20px;
transition: all 0.3s;
box-shadow: 0 2px 5px rgba(0,0,0,0.2);
left: 0;
}

.toggle-labels {
position: relative;
display: flex;
height: 100%;
font-family: Arial, sans-serif;
font-size: 14px;
}

.toggle-labels span {
position: absolute;
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
transition: all 0.3s;
}

.manual {
left: 0;
color: #4043ff;
}

.automatico {
right: 0;
color: #757575;
}

.toggle-checkbox:checked + .toggle-slider {
left: 50%;
}

.toggle-checkbox:checked ~ .toggle-labels .manual {
color: #757575;
}

.toggle-checkbox:checked ~ .toggle-labels .automatico {
color: #4043ff;
}
*/}