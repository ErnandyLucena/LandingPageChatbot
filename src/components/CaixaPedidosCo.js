import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CaixaPedidosCo.css'; // Importa o arquivo CSS para estilização
import BotaoPedido from './BotaoPedido'; // Importa o componente BotaoPedido

const CaixaPedidosCo = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetchPedidos(); // Carrega os dados da API ao montar o componente
  }, []);

  const fetchPedidos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pedidos');
      // Ordenar os pedidos do mais recente para o mais antigo
      const pedidosOrdenados = response.data.reverse();
      setPedidos(pedidosOrdenados); // Atualiza o estado com os dados recebidos da API
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
    }
  };

  return (
    <div className="caixa-pedidos-co">
      <h1 className="text-3xl flex justify-start m-6 font-medium text-white">Pedidos</h1>
      <div>
        {pedidos.map((pedido) => (
          <BotaoPedido
            id={pedido.id} // Certifique-se que 'id' é um campo único no seu pedido
            sabor={pedido.sabor}
            nomeUsuario={pedido.nome_usuario}
            horaEnviada={pedido.hora_enviada}
            confirmado={pedido.confirmado}
          />
        ))}
      </div>
    </div>
  );
};

export default CaixaPedidosCo;
