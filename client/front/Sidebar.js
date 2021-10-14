import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { AiFillSetting } from 'react-icons/ai';
import { IoMdHome } from 'react-icons/io';
import { MdModeComment } from 'react-icons/md';

function Sidebar({ handleSetting }) {
  return (
    <div className="w-20   p-2 py-4  border-right grid grid-rows-6  ">
      <div className="flex justify-center">
        <img className="h-12  w-12" src="/images/logo.png" alt="howl" />
      </div>
      <div className="row-span-4 text-gray-300 flex justify-center items-center flex-col space-y-2"></div>
      <div className="flex flex-col justify-end  items-center">
        <AiFillSetting
          className="text-gray-400 mb-4"
          onClick={handleSetting}
          size={28}
        />
        <Link href="/login">
          <a>
            <FiLogOut size={24} className="text-gray-400 " />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
