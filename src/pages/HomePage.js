import React from 'react';
import MenuLateral from '../components/MenuLateral';
import CaixaPedidosCo from '../components/CaixaPedidosCo';
import CaixaGrafico from '../components/CaixaGrafico';
import CaixaRendimento from '../components/CaixaRendimento';
import BotaoAdd from '../components/BotaoAdd';
import Profile from '../components/Profile';

function HomePage() {
  return (
    <div className="flex">
      <MenuLateral />
      <div className='flex flex-col mt-12 ml-20'>
        <div className='mb-10'>
          <div className='flex gap-3'>
              <div className='flex'>
                 <Profile/>
              </div>
             <div className='flex'>
                <BotaoAdd/>
              </div>
          </div>
        </div>
        <div className="flex items-center">
          <CaixaPedidosCo />
          <div className='ml-8 flex flex-col gap-5'>
            <CaixaGrafico/>
            <CaixaRendimento />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default HomePage;
