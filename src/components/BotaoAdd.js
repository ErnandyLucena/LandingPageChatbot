import React, { useState } from 'react';
import Modal from './Modal'; // Verifique o caminho correto do componente Modal
import axios from 'axios';

const SABORES = {
  1: 'Mussarela',
  2: 'Calabresa',
  3: 'Margherita',
  4: 'Pepperoni'
};

const BotaoAdd = ({ onPedidoAdicionado }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [sabor, setSabor] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // Limpar os campos ao fechar o modal
    setNomeUsuario('');
    setSabor('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const novoPedido = {
        nome_usuario: nomeUsuario,
        item: sabor,
        confirmado: 1 // Sempre confirmado
      };

      await axios.post('http://localhost:3000/pedidos', novoPedido);
      if (typeof onPedidoAdicionado === 'function') {
        onPedidoAdicionado(); // Chamando a função passada como propriedade
      } else {
        console.error('onPedidoAdicionado não é uma função válida:', onPedidoAdicionado);
      }
      closeModal(); // Fechar o modal após adicionar o pedido
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
    }
  };

  return (
    <div>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-3xl justify-center flex items-center"
        onClick={openModal}
      >
        <img src="../images/adicionar.png" alt="Ícone" className="w-6 h-6 mr-2" />
        Adicionar
      </button>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <div className="p-4 bg-white rounded">
          <h2 className="text-xl font-bold mb-8 justify-center text-center text-gray-800">Adicionar Pedido</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <img src="../images/perfil-de-usuario.png" className="w-5 h-5 absolute left-3 top-2.5" alt="Ícone Usuário"/>
              <input
                id="nomeUsuario"
                type="text"
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                required
                placeholder="Nome do Usuário"
                className="mt-1 block w-full p-2 pl-10 border border-gray-300 rounded-xl"
              />
            </div>
            <div className="mb-4 relative">
              <img src="../images/pizza-(1).png" className="w-5 h-5 absolute left-3 top-2.5" alt="Ícone Sabor"/>
              <select
                id="sabor"
                value={sabor}
                onChange={(e) => setSabor(e.target.value)}
                required
                className="mt-1 block w-full p-2 pl-10 border border-gray-300 rounded-xl"
              >
                <option value="" disabled>Selecione o Sabor</option>
                {Object.entries(SABORES).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-center gap-1">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 rounded-xl mr-2"
              >
                Adicionar
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-5 rounded-xl"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BotaoAdd;
