import React from 'react';
import BotaoAdd from './BotaoAdd';
import FormularioAdicionarPedido from './FormularioAdicionarPedido';

const ComponentePai = () => {
  const handlePedidoAdicionado = () => {
    console.log('Pedido adicionado!'); // Ou qualquer lógica adicional
  };

  return (
    <div>
      <BotaoAdd onPedidoAdicionado={handlePedidoAdicionado} />
      <FormularioAdicionarPedido onPedidoAdicionado={handlePedidoAdicionado} />
    </div>
  );
};

export default ComponentePai;
