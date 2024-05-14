import React from 'react';
import MenuLateral from '../components/MenuLateral';
import CaixaPedidos from '../components/CaixaPedidosCo';

const PedidosPage = () => {
  return (
    <div className="flex">
      <MenuLateral />
      <div className="w-4/5">
        <h1>Pedidos</h1>
        {/* Aqui você pode adicionar componentes relacionados aos pedidos */}
      </div>
    </div>
  );
}

export default PedidosPage;
