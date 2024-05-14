import React from 'react';
import MenuLateral from '../components/MenuLateral';
import Estoque from '../components/Estoque';

const EstoquePage = () => {
  return (
    <div className="flex">
      <MenuLateral />
      <div className="w-4/5">
        <h1>Estoque</h1>
        <Estoque />
      </div>
    </div>
  );
}

export default EstoquePage;
