import { Navigate } from 'react-router-dom';

export default function RotaProtegida({ children }) {
  const estaLogado = localStorage.getItem('usuarioLogado') === 'true';

  return estaLogado ? children : <Navigate to="/login" />;
}