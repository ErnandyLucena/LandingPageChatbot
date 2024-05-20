import React, { useState } from 'react';
import axios from 'axios';

const ModalEditarExcluir = ({ isOpen, onClose, sabor, nomeUsuario, id, onPedidoEditado, onPedidoExcluido }) => {
  const [novoNomeUsuario, setNovoNomeUsuario] = useState(nomeUsuario);
  const [novoSabor, setNovoSabor] = useState(sabor);

  // Mapeamento de sabores com seus respectivos números
  const mapeamentoSabores = {
    'Mussarela': 1,
    'Calabresa': 2,
    'Portuguesa': 3,
    'Frango com Catupiry': 4,
    // Adicione mais sabores conforme necessário
  };

  const handleEdit = async () => {
    try {
      // Encontrar o número do sabor correspondente ao nome digitado
      const numeroSabor = mapeamentoSabores[novoSabor];

      const pedidoEditado = {
        nome_usuario: novoNomeUsuario,
        item: numeroSabor // Enviar o número do sabor para a API
      };

      await axios.put(`http://localhost:3000/pedidos/${id}`, pedidoEditado);
      if (typeof onPedidoEditado === 'function') {
        onPedidoEditado(); // Atualizar lista de pedidos após edição
      }
      onClose(); // Fechar o modal após edição
    } catch (error) {
      console.error('Erro ao editar pedido:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/pedidos/${id}`);
      if (typeof onPedidoExcluido === 'function') {
        onPedidoExcluido(); // Atualizar lista de pedidos após exclusão
      }
      onClose(); // Fechar o modal após exclusão
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>X</button>
          <div className='px-10'>
          <h2 className="text-xl font-bold mb-8 justify-center text-center text-gray-800">Editar ou Excluir Pedido</h2>
          <form onSubmit={handleEdit}>
            <div className="mb-4 relative">
              <label htmlFor="nomeUsuario" className="block font-medium text-gray-700 sr-only">
                Nome do Usuário:
              </label>
              <div className="flex items-center relative ">
                <img src="../images/perfil-de-usuario.png" alt="Ícone Usuário" className="w-6 h-6 mr-2 absolute left-3 top-3 items-center" />
                <input
                  id="nomeUsuario"
                  type="text"
                  value={novoNomeUsuario}
                  onChange={(e) => setNovoNomeUsuario(e.target.value)}
                  required
                  placeholder="Nome do Usuário"
                  className="mt-1 block w-full p-2 pl-12 border border-gray-300 rounded-xl "
                />
              </div>
            </div>
            <div className="mb-4 relative">
              <label htmlFor="sabor" className="block font-medium text-gray-700 sr-only">
                Sabor:
              </label>
              <div className="flex items-center relative">
                <img src="../images/pizza-(1).png" alt="Ícone Sabor" className="w-6 h-6 mr-2 absolute left-3 top-3 items-center" />
                <input
                  id="sabor"
                  type="text"
                  value={novoSabor}
                  onChange={(e) => setNovoSabor(e.target.value)}
                  required
                  placeholder="Sabor"
                  className="mt-1 block w-full p-2 pl-12 border border-gray-300 rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl"
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl"
              >
                Excluir
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarExcluir;
