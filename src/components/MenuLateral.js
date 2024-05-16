import React from 'react';

const MenuLateral = () => {
  return (
    <div className="bg-orange-500 text-white w-1/6 h-screen text-base flex flex-col justify-center">
      <ul className="flex-1 justify-center mt-10 lg:">
        <li className="flex items-center p-4 cursor-pointer transition-colors duration-300 transform hover:bg-orange-600 rounded-full ml-8 w-32">
          <img src="/images/botao-de-inicio1.png" alt="Ícone" className="w-7 h-7 mr-4" />
          <span>Home</span>
        </li>
        <li className="flex items-center p-4 cursor-pointer transition-colors duration-300 transform hover:bg-orange-600 rounded-full ml-8 w-32">
          <img src="/images/cesta-de-compra-1.png" alt="Ícone" className="w-6 h-6 mr-4" />
          <span>Pedidos</span>
        </li>
        <li className="flex items-center p-4 cursor-pointer transition-colors duration-300 transform hover:bg-orange-600 rounded-full ml-8 w-36">
          <img src="/images/grafico-de-pizza 1.png" alt="Ícone" className="w-7 h-7 mr-4" />
          <span>Gráficos</span>
        </li>
        <li className="flex items-center p-4 cursor-pointer transition-colors duration-300 transform hover:bg-orange-600 rounded-full ml-8 w-36">
          <img src="/images/estoque-pronto 1.png" alt="Ícone" className="w-7 h-7 mr-4" />
          <span>Estoque</span>
        </li>
        <li className="flex items-center p-4 cursor-pointer transition-colors duration-300 transform hover:bg-orange-600 rounded-full ml-8 w-44">
          <img src="/images/funcionarios.png" alt="Ícone" className="w-6 h-6 mr-4" />
          <span>Funcionários</span>
        </li>
      </ul>
      <ul>
      <li className="flex items-center p-4 cursor-pointer transition-colors duration-300 transform hover:bg-orange-600 rounded-full ml-8 w-44">
          <img src="/images/config 1.png" alt="Ícone" className="w-6 h-6 mr-4" />
          <span>Configurações</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuLateral;
