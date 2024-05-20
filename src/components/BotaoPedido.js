import React, { useState } from 'react';
import ModalOpcoesPedido from './ModalOpcoesPedido';

const BotaoPedido = ({ sabor, nomeUsuario, id, onPedidoEditado, onPedidoExcluido }) => {
  const [modalOpcoesIsOpen, setModalOpcoesIsOpen] = useState(false);

  const openModalOpcoes = () => {
    setModalOpcoesIsOpen(true);
  };

  const closeModalOpcoes = () => {
    setModalOpcoesIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center mb-3">
      <button
        className="bg-white text-black py-2 px-4 rounded-3xl w-11/12 h-24"
        onClick={openModalOpcoes}
      >
        <div className="text-black flex items-center">
          <img src="/images/pizza-(1).png" alt="Ícone" className="w-9 h-9 ml-4" />
          <div>
            <h1 className="lg:text-xl text-lg ml-3 items-center">{sabor}</h1>
          </div>
          <div className="ml-6 linha"></div>
          <div className="flex flex-col ml-2 gap-1">
            <div className="flex">
              <img src="/images/perfil-de-usuario.png" alt="Ícone" className="w-6 h-6 ml-4" />
              <p className="ml-2 sm:text-sm">{nomeUsuario}</p>
            </div>
            <div className="flex">
              <img src="/images/endereco.png" alt="Ícone" className="w-5 h-5 ml-5" />
              <p className="ml-2 sm:text-sm">Endereço</p>
            </div>
            <div className="flex">
              <img src="/images/code.png" alt="Ícone" className="w-5 h-5 ml-5" />
              <p className="ml-2 sm:text-sm">{id}</p>
            </div>
          </div>
        </div>
      </button>
      <ModalOpcoesPedido
        isOpen={modalOpcoesIsOpen}
        onClose={closeModalOpcoes}
        sabor={sabor}
        nomeUsuario={nomeUsuario}
        id={id}
        onPedidoEditado={onPedidoEditado}
        onPedidoExcluido={onPedidoExcluido}
      />
    </div>
  );
};

export default BotaoPedido;
