import React from 'react';
import MenuLateral from '../components/MenuLateral';
import Graficos from '../components/Graficos';

const GraficosPage = () => {
  return (
    <div className="flex">
      <MenuLateral />
      <div className="w-4/5">
        <h1>Gráficos</h1>
        <Graficos />
      </div>
    </div>
  );
}

export default GraficosPage;
