import React from 'react';

import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <div className="p-2 border-bottom flex justify-between items-center">
      <div className="flex justify-center items-center">
        <p className="text-xl font-medium ">Postman</p>
      </div>
      <div className="flex items-center ">
        <div>
          <p className="text-sm mr-2 font-bold"> {user.name}</p>
          <p className="text-sm mr-2 text-gray-200">{user.user_id}</p>
        </div>
        <img
          className="h-10  w-10 rounded-full"
          src={user.name ? user.profile : '/images/user.png'}
          alt="howl"
        />
      </div>
    </div>
  );
}

export default Header;
