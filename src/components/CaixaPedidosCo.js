import React from 'react';
import './CaixaPedidosCo.css'; // Importa o arquivo CSS para estilização
import './BotaoPedido'; // Importa o arquivo CSS para estilização
import BotaoPedido from './BotaoPedido';

const CaixaPedidosCo = () => {
  return (
    <div className="caixa-pedidos-co">
      <h1 className="text-3xl flex justify-start m-6 text-white">Pedidos</h1>
      {/* Adicione seus cards de pedido aqui */}
      <div className=''>
        <BotaoPedido/>
        
      </div>
    </div>
  );
};

export default CaixaPedidosCo;
