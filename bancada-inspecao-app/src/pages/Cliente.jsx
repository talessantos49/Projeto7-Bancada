// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import '../styles/formulario.css';

// export default function Fornecedor() {
//   const [formData, setFormData] = useState({
//     razaoSocial: '',
//     nomeFantasia: '',
//     cnpj: '',
//     contatoResponsavel: {
//       nome: '',
//       cargo: '',
//       telefone: '',
//       email: ''
//     },
//     endereco: {
//       cep: '',
//       logradouro: '',
//       numero: '',
//       complemento: '',
//       bairro: '',
//       cidade: '',
//       estado: '',
//     },
//     atividadePrincipal: '',
//     dataCadastro: new Date().toISOString().split('T')[0]
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     if (name.startsWith('contatoResponsavel.')) {
//       const [parent, field] = name.split('.');
//       setFormData(prev => ({
//         ...prev,
//         [parent]: {
//           ...prev[parent],
//           [field]: value
//         }
//       }));
//     } else if (name.startsWith('endereco.')) {
//       const [parent, field] = name.split('.');
//       setFormData(prev => ({
//         ...prev,
//         [parent]: {
//           ...prev[parent],
//           [field]: value
//         }
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.cnpj || !formData.razaoSocial) {
//       alert('Preencha os campos obrigatórios!');
//       return;
//     }
//     console.log('Dados PJ enviados:', formData);
//     alert('Fornecedor cadastrado com sucesso!');
//   };

//   return (
// 	<div className="form-container">
// 		<h1>Cadastro de Fornecedor (PJ)</h1>
// 		<form onSubmit={handleSubmit}>
// 		<div className="form-section">
// 			<label required>
// 				Razão Social*:
// 				<input
// 					type="text"
// 					name="razaoSocial"
// 					value={formData.razaoSocial}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</label>
// 			<label>
// 				Nome Fantasia:
// 				<input
// 				type="text"
// 				name="nomeFantasia"
// 				value={formData.nomeFantasia}
// 				onChange={handleChange}
// 				/>
// 			</label>
// 			<label>
// 				CNPJ*:
// 				<input
// 					type="text"
// 					name="cnpj"
// 					value={formData.cnpj}
// 					onChange={handleChange}
// 					pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}"
// 					placeholder="00.000.000/0000-00"
// 					required
// 				/>
// 			</label>
// 			<label>
// 				Nome do Responsável*:
// 				<input
// 				type="text"
// 				name="contatoResponsavel.nome"
// 				value={formData.contatoResponsavel.nome}
// 				onChange={handleChange}
// 				required
// 				/>
// 			</label>
// 			<label>
// 				Cargo:
// 				<input
// 				type="text"
// 				name="contatoResponsavel.cargo"
// 				value={formData.contatoResponsavel.cargo}
// 				onChange={handleChange}
// 				/>
// 			</label>
// 			<label>
// 				Telefone*:
// 				<input
// 					type="tel"
// 					name="contatoResponsavel.telefone"
// 					value={formData.contatoResponsavel.telefone}
// 					onChange={handleChange}
// 					pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
// 					placeholder="(99) 99999-9999"
// 					required
// 				/>
// 			</label>
// 			<label>
// 				Email Corporativo*:
// 			<input
// 				type="email"
// 				name="contatoResponsavel.email"
// 				value={formData.contatoResponsavel.email}
// 				onChange={handleChange}
// 				required
// 			/>
// 			</label>
// 			<label>
// 				CEP:
// 				<input
// 					type="text"
// 					name="endereco.cep"
// 					value={formData.endereco.cep}
// 					onChange={handleChange}
// 					pattern="\d{5}-\d{3}"
// 					placeholder="00000-000"
// 				/>
// 			</label>
// 			<label>
// 				Logradouro:
// 				<input
// 					type="text"
// 					name="endereco.logradouro"
// 					value={formData.endereco.logradouro}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 			<label>
// 				Complemento:
// 				<input
// 					type="text"
// 					name="endereco.complemento"
// 					value={formData.endereco.complemento}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 		</div>
//         <button type="submit" className="btn-submit">Cadastrar Fornecedor</button>
//       </form>
//       <Link to="/" className="btn-voltar">
//         Voltar à Home
//       </Link>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/formulario.css';
// import MaskedInput from '../components/MaskedInput';

// export default function ClienteCRUD() {
//   const [clientes, setClientes] = useState([]);
//   const [currentCliente, setCurrentCliente] = useState({
//     razaoSocial: '',
//     nomeFantasia: '',
//     cnpj: '',
//     contatoResponsavel: {
//       nome: '',
//       cargo: '',
//       telefone: '',
//       email: ''
//     },
//     endereco: {
//       cep: '',
//       logradouro: '',
//       numero: '',
//       complemento: '',
//       bairro: '',
//       cidade: '',
//       estado: '',
//     },
//     atividadePrincipal: ''
//   });
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
  
//     if (name.startsWith('contatoResponsavel.')) {
//       const [parent, field] = name.split('.');
//       setCurrentCliente(prev => ({
//         ...prev,
//         [parent]: {
//           ...prev[parent],
//           [field]: value
//         }
//       }));
//     } else if (name.startsWith('endereco.')) {
//       const [parent, field] = name.split('.');
//       setCurrentCliente(prev => ({
//         ...prev,
//         [parent]: {
//           ...prev[parent],
//           [field]: value
//         }
//       }));
//     } else {
//       setCurrentCliente(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const limparMascara = (texto) => texto.replace(/\D/g, '');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!currentCliente.cnpj || !currentCliente.razaoSocial) {
//       alert('Preencha os campos obrigatórios!');
//       return;
//     }
//     const clienteFinal = {
//       ...currentCliente,
//       cnpj: limparMascara(currentCliente.cnpj),
//       contatoResponsavel: {
//         ...currentCliente.contatoResponsavel,
//         telefone: limparMascara(currentCliente.contatoResponsavel.telefone),
//       },
//       endereco: {
//         ...currentCliente.endereco,
//         cep: limparMascara(currentCliente.endereco.cep),
//       },
//     };  
//     const clienteProcessado = {
//       ...currentCliente,
//       cnpj: formatarNumeros(currentCliente.cnpj),
//       contatoResponsavel: {
//         ...currentCliente.contatoResponsavel,
//         telefone: formatarNumeros(currentCliente.contatoResponsavel.telefone),
//       },
//       endereco: {
//         ...currentCliente.endereco,
//         cep: formatarNumeros(currentCliente.endereco.cep),
//       }
//     };

//     if (editMode) {
//       setClientes(clientes.map(cliente => 
//         cliente.id === currentId ? { ...clienteProcessado, id: currentId } : cliente
//       ));
//     } else {
//       setClientes([...clientes, { ...clienteProcessado, id: Date.now() }]);
//     }

//     setCurrentCliente({
//       razaoSocial: '',
//       nomeFantasia: '',
//       cnpj: '',
//       contatoResponsavel: {
//         nome: '',
//         cargo: '',
//         telefone: '',
//         email: ''
//       },
//       endereco: {
//         cep: '',
//         logradouro: '',
//         numero: '',
//         complemento: '',
//         bairro: '',
//         cidade: '',
//         estado: '',
//       },
//       atividadePrincipal: ''
//     });
    
//     setEditMode(false);
//     setCurrentId(null);
//   };

//   const handleEdit = (id) => {
//     const cliente = clientes.find(c => c.id === id);
//     setCurrentCliente(cliente);
//     setEditMode(true);
//     setCurrentId(id);
//   };

//   const handleDelete = (id) => {
//     setClientes(clientes.filter(c => c.id !== id));
//   };

//   const filteredClientes = clientes.filter(cliente =>
//     cliente.cnpj.includes(searchTerm) ||
//     cliente.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="crud-container">
//       <h1>Gestão de Clientes PJ</h1>
      
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Buscar por CNPJ ou Razão Social"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <form onSubmit={handleSubmit} className="form-clientes">
//         <div className="form-column">
//           <label>
//             Razão Social*
//             <input
//               type="text"
//               name="razaoSocial"
//               value={currentCliente.razaoSocial}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Nome Fantasia
//             <input
//               type="text"
//               name="nomeFantasia"
//               value={currentCliente.nomeFantasia}
//               onChange={handleChange}
//             />
//           </label>

//           <label>
//             CNPJ*
//             <MaskedInput
// 				mask="99.999.999/9999-99"
// 				name="cnpj"
// 				value={currentCliente.cnpj}
// 				onChange={handleChange}
// 				placeholder="00.000.000/0000-00"
// 				required
//             />
//           </label>
//         </div>

//         <div className="form-column">
//           <label>
//             Nome do Responsável*
//             <input
//               type="text"
//               name="contatoResponsavel.nome"
//               value={currentCliente.contatoResponsavel.nome}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Telefone*
//             <MaskedInput
// 				mask="(99) 99999-9999"
// 				name="contatoResponsavel.telefone"
// 				value={currentCliente.contatoResponsavel.telefone}
// 				onChange={handleChange}
// 				placeholder="(99) 99999-9999"
// 				required
//             />
//           </label>

//           <label>
//             Email Corporativo*	
//             <input
//               type="email"
//               name="contatoResponsavel.email"
//               value={currentCliente.contatoResponsavel.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>

//         <div className="form-column">
//           <label>
//             CEP
//             <MaskedInput
// 				mask="99999-999"
// 				name="endereco.cep"
// 				value={currentCliente.endereco.cep}
// 				onChange={handleChange}
// 				placeholder="00000-000"
//             />
//           </label>

//           <label>
//             Logradouro
//             <input
//               type="text"
//               name="endereco.logradouro"
//               value={currentCliente.endereco.logradouro}
//               onChange={handleChange}
//             />
//           </label>

//           <label>
//             Complemento
//             <input
//               type="text"
//               name="endereco.complemento"
//               value={currentCliente.endereco.complemento}
//               onChange={handleChange}
//             />
//           </label>
//         </div>

//         <button type="submit" className="btn-action">
//           {editMode ? 'Atualizar Cliente' : 'Cadastrar Cliente'}
//         </button>
//       </form>

//       <div className="clientes-list">
//         {filteredClientes.map(cliente => (
//           <div key={cliente.id} className="cliente-card">
//             <div className="cliente-info">
//               <h3>{cliente.razaoSocial}</h3>
//               <p>CNPJ: {cliente.cnpj}</p>
//               <p>Responsável: {cliente.contatoResponsavel.nome}</p>
//             </div>
//             <div className="cliente-actions">
//               <button onClick={() => handleEdit(cliente.id)} className="btn-edit">
//                 Editar
//               </button>
//               <button onClick={() => handleDelete(cliente.id)} className="btn-delete">
//                 Excluir
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Link to="/" className="btn-voltar">
//         Voltar à Home
//       </Link>
//     </div>
//   );
// }

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/formulario.css';
import MaskedInput from '../components/MaskedInput';

function formatarNumeros(valor) {
  const limpo = valor.replace(/\D/g, '');

  // CNPJ (14 dígitos)
  if (limpo.length === 14) {
    return limpo.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }

  // CEP (8 dígitos)
  if (limpo.length === 8) {
    return limpo.replace(/(\d{5})(\d{3})/, "$1-$2");
  }

  // Telefone (11 dígitos)
  if (limpo.length === 11) {
    return limpo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  return valor;
}

export default function ClienteCRUD() {
  const [clientes, setClientes] = useState([]);
  const [currentCliente, setCurrentCliente] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    contatoResponsavel: {
      nome: '',
      cargo: '',
      telefone: '',
      email: ''
    },
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
    atividadePrincipal: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('contatoResponsavel.')) {
      const [parent, field] = name.split('.');
      setCurrentCliente(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [field]: value
        }
      }));
    } else if (name.startsWith('endereco.')) {
      const [parent, field] = name.split('.');
      setCurrentCliente(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [field]: value
        }
      }));
    } else {
      setCurrentCliente(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const limparMascara = (texto) => texto.replace(/\D/g, '');

  const formatarNumeros = (texto) => texto; // Função dummy até implementação correta

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentCliente.cnpj || !currentCliente.razaoSocial) {
      alert('Preencha os campos obrigatórios!');
      return;
    }
    const clienteFinal = {
      ...currentCliente,
      cnpj: limparMascara(currentCliente.cnpj),
      contatoResponsavel: {
        ...currentCliente.contatoResponsavel,
        telefone: limparMascara(currentCliente.contatoResponsavel.telefone),
      },
      endereco: {
        ...currentCliente.endereco,
        cep: limparMascara(currentCliente.endereco.cep),
      },
    };

    const clienteProcessado = clienteFinal;

    if (editMode) {
      setClientes(clientes.map(cliente =>
        cliente.id === currentId ? { ...clienteProcessado, id: currentId } : cliente
      ));
    } else {
      setClientes([...clientes, { ...clienteProcessado, id: Date.now() }]);
    }

    setCurrentCliente({
      razaoSocial: '',
      nomeFantasia: '',
      cnpj: '',
      contatoResponsavel: {
        nome: '',
        cargo: '',
        telefone: '',
        email: ''
      },
      endereco: {
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
      atividadePrincipal: ''
    });

    setEditMode(false);
    setCurrentId(null);
  };

  const handleEdit = (id) => {
    const cliente = clientes.find(c => c.id === id);
    setCurrentCliente(cliente);
    setEditMode(true);
    setCurrentId(id);
  };

  const handleDelete = (id) => {
    setClientes(clientes.filter(c => c.id !== id));
  };

  const filteredClientes = clientes.filter(cliente =>
    cliente.cnpj.includes(searchTerm) ||
    cliente.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="crud-container">
      <h1>Gestão de Clientes</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por CNPJ ou Razão Social"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <form onSubmit={handleSubmit} className="form-clientes">
        <div className="form-column">
          <label>
            CNPJ*
            <MaskedInput
              mask="00.000.000/0000-00"
              name="cnpj"
              value={currentCliente.cnpj}
              onChange={handleChange}
              placeholder="00.000.000/0000-00"
              required
            />
          </label>
          <label>
            Razão Social*
            <input
              type="text"
              name="razaoSocial"
              value={currentCliente.razaoSocial}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Nome Fantasia
            <input
              type="text"
              name="nomeFantasia"
              value={currentCliente.nomeFantasia}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-column">
          <label>
            Nome do Responsável
            <input
              type="text"
              name="contatoResponsavel.nome"
              value={currentCliente.contatoResponsavel.nome}
              onChange={handleChange}
            />
          </label>

          <label>
            Telefone
            <MaskedInput
              mask="(00) 00000-0000"
              name="contatoResponsavel.telefone"
              value={currentCliente.contatoResponsavel.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
            />
          </label>

          <label>
            Email Corporativo
            <input
              type="email"
              name="contatoResponsavel.email"
              value={currentCliente.contatoResponsavel.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-column">
          <label>
            CEP
            <MaskedInput
              mask="00000-000"
              name="endereco.cep"
              value={currentCliente.endereco.cep}
              onChange={handleChange}
              placeholder="00000-000"
            />
          </label>

          <label>
            Logradouro
            <input
              type="text"
              name="endereco.logradouro"
              value={currentCliente.endereco.logradouro}
              onChange={handleChange}
            />
          </label>

          <label>
            Complemento
            <input
              type="text"
              name="endereco.complemento"
              value={currentCliente.endereco.complemento}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit" className="btn-action">
          {editMode ? 'Atualizar Cliente' : 'Cadastrar Cliente'}
        </button>
      </form>

      <div className="clientes-list">
        {filteredClientes.map(cliente => (
          <div key={cliente.id} className="cliente-card">
            <div className="cliente-info">
              <h3>{cliente.razaoSocial}</h3>
              <p>CNPJ: {cliente.cnpj}</p>
              <p>Responsável: {cliente.contatoResponsavel.nome}</p>
            </div>
            <div className="cliente-actions">
              <button onClick={() => handleEdit(cliente.id)} className="btn-edit">
                Editar
              </button>
              <button onClick={() => handleDelete(cliente.id)} className="btn-delete">
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="btn-voltar">
        Voltar à Home
      </Link>
    </div>
  );
}
