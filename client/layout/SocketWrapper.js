import React from 'react';
import { SocketProvider } from '@context/SocketProvider';
import { useSelector } from 'react-redux';

function SocketWrapper({ children }) {
  const chat_id = useSelector((state) => state.user.chat_id);
  console.log('chat is = ', chat_id);

  return <SocketProvider id={'hjfdjhdfjhdjhd'}>{children}</SocketProvider>;
}

export default SocketWrapper;
