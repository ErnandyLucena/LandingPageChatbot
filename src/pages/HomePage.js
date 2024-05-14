import React from 'react';
import MenuLateral from '../components/MenuLateral';
import CaixaPedidos from '../components/CaixaPedidosCo';

const HomePage = () => {
  return (
    <div className="flex">
      <MenuLateral />
      <CaixaPedidos />
    </div>
  );
};

export default HomePage;
