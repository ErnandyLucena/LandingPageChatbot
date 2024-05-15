import React from 'react';

const BotaoAdd = () => {
  return (
    <div className="flex items-center">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
        <img src="/images/adicionar.png" alt="Adicionar" className="w-6 h-6" />
      </button>
      <span className="ml-2">Adicionar pedido</span>
    </div>
  );
};

export default BotaoAdd;
