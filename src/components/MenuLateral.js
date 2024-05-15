import React from 'react';

const MenuLateral = () => {
  return (
    <div className="bg-orange-500 text-white w-1/6 h-screen text-base flex flex-col justify-center">
      <ul className="flex-1 justify-center mt-10 lg:">
        <li className="flex items-center p-4 cursor-pointer hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
          <img src="/images/botao-de-inicio1.png" alt="Ícone" className="w-7 h-7 mr-4" />
          Home
        </li>
        <li className="flex items-center p-4 cursor-pointer hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
          <img src="/images/cesta-de-compra-1.png" alt="Ícone" className="w-6 h-6 mr-4" />
          Pedidos
        </li>
        <li className="flex items-center p-4 cursor-pointer hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
          <img src="/images/grafico-de-pizza 1.png" alt="Ícone" className="w-7 h-7 mr-4" />
          Gráficos
        </li>
        <li className="flex items-center p-4 cursor-pointer hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
          <img src="/images/estoque-pronto 1.png" alt="Ícone" className="w-7 h-7 mr-4" />
          Estoque
        </li>
        <li className="flex items-center p-4 cursor-pointer hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
          <img src="/images/funcionarios.png" alt="Ícone" className="w-6 h-6 mr-4" />
          Funcionários
        </li>
      </ul>
      <ul>
      <li className="flex items-center p-4 cursor-pointer hover:bg-orange-600 transition-transform duration-300 ">
          <img src="/images/config 1.png" alt="Ícone" className="w-6 h-6 mr-4" />
          Configurações
        </li>
      </ul>
    </div>
  );
};

export default MenuLateral;
