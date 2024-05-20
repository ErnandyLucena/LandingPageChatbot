import React, { useState } from 'react';
import axios from 'axios';

const FormularioAdicionarPedido = ({ onPedidoAdicionado }) => {
  const [pedido, setPedido] = useState({
    nome_usuario: '',
    item: '',
    quantidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({ ...pedido, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Definir os valores padrão
    const novoPedido = {
      ...pedido,
      chat_id: (await getNextChatId()).toString(),
      confirmado: 1,
      hora_enviada: new Date().toISOString()
    };

    try {
      await axios.post('http://localhost:3000/pedidos', novoPedido);
      onPedidoAdicionado();
      alert('Pedido adicionado com sucesso!');
      // Limpar o formulário após o sucesso
      setPedido({
        nome_usuario: '',
        item: '',
        quantidade: ''
      });
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
      alert('Erro ao adicionar pedido');
    }
  };

  const getNextChatId = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pedidos');
      return response.data.length + 1;
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      return 1;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Usuário</label>
        <input type="text" name="nome_usuario" value={pedido.nome_usuario} onChange={handleChange} required />
      </div>
      <div>
        <label>Sabor da Pizza</label>
        <input type="text" name="item" value={pedido.item} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantidade</label>
        <input type="number" name="quantidade" value={pedido.quantidade} onChange={handleChange} required />
      </div>
      <button type="submit">Adicionar Pedido</button>
    </form>
  );
};

export default FormularioAdicionarPedido;
