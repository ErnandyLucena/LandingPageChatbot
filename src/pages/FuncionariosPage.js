import React from 'react';
import MenuLateral from '../components/MenuLateral';
import Funcionarios from '../components/FuncionariosCo';

const FuncionariosPage = () => {
  return (
    <div className="flex">
      <MenuLateral />
      <div className="w-4/5">
        <h1>Funcionários</h1>
        <Funcionarios />
      </div>
    </div>
  );
}

export default FuncionariosPage;
