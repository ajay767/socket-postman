import React from 'react';
import { motion } from 'framer-motion';
import { MdSend } from 'react-icons/md';

import MessageCard from '../components/MessageCard';
import Notice from '../components/Notice';

function Conversation() {
  return (
    <>
      <div className="h-14 p-2 border-bottom flex justify-start items-center flex-shrink-0 ">
        <img
          src="/images/u5.jpeg"
          className="h-10  w-10 object-cover rounded-full "
        />
        <div className="ml-2">
          <p className="text-sm font-medium">Ajay yadav</p>
          <p className="text-sm text-gray-300">kssh_23</p>
        </div>
      </div>
      <div className="p-2 flex-grow flex flex-col overflow-y-auto scrollbar-hide">
        <MessageCard message="Hello" type="sent" author="You" />
        <MessageCard message="Hiyaa!!" type="received" author="Shruti" />
        <MessageCard
          message="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
          type="received"
          author="Shruti"
        />
      </div>
      <div className="p-2 border-top h-16  flex items-center flex-shrink-0    ">
        <input
          placeholder="Message"
          className="flex-grow  h-full bg-transparent outline-none"
        />
        <motion.span className="cursor-pointer pr-2" whileTap={{ x: 10 }}>
          <MdSend size={26} className="ml-2 text-yellow-500" />
        </motion.span>
      </div>
    </>
  );
}

export default Conversation;
