import React, { useCallback, useEffect } from 'react';
import { throttle } from 'lodash';
import { useSocket } from '@context/SocketProvider';
import { CgSearch } from 'react-icons/cg';

function SearchBar() {
  const socket = useSocket();
  const searchUser = (key) => {
    console.log(key.target.value);
  };

  const throttleSearch = useCallback(throttle(searchUser, 500), []);

  useEffect(() => {
    if (socket) {
      socket.emit('call');
      socket.on('reply', (msg) => {
        console.log(msg);
      });
    }
  });
  return (
    <div className="p-2 h-14   border-bottom flex justify-start items-center flex-shrink-0  ">
      <CgSearch size={28} className="text-gray-400 text-opacity-50" />
      <input
        onChange={throttleSearch}
        placeholder="Search"
        className="h-full flex-grow ml-2 bg-transparent outline-none text-gray-300 "
        type="text"
      />
    </div>
  );
}

export default SearchBar;
