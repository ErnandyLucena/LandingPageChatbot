import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import './CaixaGraficos.css'; // Importa o arquivo CSS para estilização

const GraficoPedidos = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pedidos');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const renderChart = () => {
      const ctx = chartRef.current;
      if (ctx) {
        // Destrói o gráfico anterior se já existir
        if (chartRef.current && chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        const pedidosPorHora = agruparPedidosPorHora(data);

        const labels = Object.keys(pedidosPorHora).sort();
        const dataValues = labels.map(label => pedidosPorHora[label]);

        chartRef.current.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Quantidade de Pedidos',
              data: dataValues,
              backgroundColor: 'rgba(255, 255, 255, 1)', // Fundo branco do gráfico
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 1)', // Borda branca
              color: '#ffffff', // Cor do texto (branco)
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                precision: 0,
                ticks: {
                  color: 'rgba(255, 255, 255, 1)', // Cor das legendas do eixo Y (branco)
                },
              },
              x: {
                ticks: {
                  color: 'rgba(255, 255, 255, 1)', // Cor das legendas do eixo X (branco)
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: '#ffffff', // Cor do texto da legenda (branco)
                },
              },
            },
          }
        });
      }
    };

    renderChart();
  }, [data]);

  const agruparPedidosPorHora = (pedidos) => {
    const pedidosPorHora = {};
    pedidos.forEach(pedido => {
      const hora = new Date(pedido.hora_enviada).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      if (pedidosPorHora[hora]) {
        pedidosPorHora[hora]++;
      } else {
        pedidosPorHora[hora] = 1;
      }
    });
    return pedidosPorHora;
  };

  return (
    <div className="CaixaGraficos">
      <h2></h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default GraficoPedidos;
