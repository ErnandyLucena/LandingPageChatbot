import React from 'react';

const BotaoPedido = ({ sabor, nomeUsuario, horaEnviada, confirmado, id }) => {
  return (
    <div className="flex items-center justify-center mb-3">
      <button className="bg-white text-black py-2 px-4 rounded-3xl w-11/12 h-24">
        <div className="text-black flex items-center">
          <img src="/images/pizza-(1).png" alt="Ícone" className="w-9 h-9 ml-4" />
          <div>
            <h1 className="text-2xl ml-3 items-center">{sabor}</h1>
          </div>
          <div className="ml-6 linha"></div>
          <div className="flex flex-col ml-2 gap-1">
            <div className="flex">
              <img src="/images/perfil-de-usuario.png" alt="Ícone" className="w-6 h-6 ml-4" />
              <p className="ml-2 lg:text-sm 2xl:text-base">{nomeUsuario}</p>
            </div>
            <div className="flex">
              <img src="/images/endereco.png" alt="Ícone" className="w-5 h-5 ml-5" />
              <p className="ml-2 lg:text-sm 2xl:text-base">Endereço</p>
            </div>
            <div className="flex">
              <img src="/images/confirmar.png" alt="Ícone" className="w-5 h-5 ml-5" />
              <p className="ml-2 lg:text-sm 2xl:text-base">{id}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default BotaoPedido;
