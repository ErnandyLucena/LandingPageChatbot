import React from 'react';

const MenuLateral = () => {
  return (
    <div className="bg-gray-800 text-white w-1/5 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold">Menu</h1>
      </div>
      <ul className="flex-1">
        <li className="p-4 cursor-pointer hover:bg-gray-700">Home</li>
        <li className="p-4 cursor-pointer hover:bg-gray-700">Pedidos</li>
        <li className="p-4 cursor-pointer hover:bg-gray-700">Gráficos</li>
        <li className="p-4 cursor-pointer hover:bg-gray-700">Estoque</li>
        <li className="p-4 cursor-pointer hover:bg-gray-700">Funcionários</li>
      </ul>
    </div>
  );
};

export default MenuLateral;
