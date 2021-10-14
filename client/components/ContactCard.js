import React, { useEffect } from 'react';
import moment from 'moment';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function ContactCard({ profile, name, createdAt, variants }) {
  const [cardRef, inView] = useInView();
  const cardAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      cardAnimation.start({ opacity: 1 });
    } else cardAnimation.start({ opacity: 0 });
  });

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.9, transition: { duration: 0.05 } }}
      className="p-2 flex hover:bg-gray-300 hover:bg-opacity-10 cursor-pointer"
    >
      <div className="flex">
        <img
          alt={name}
          src={profile}
          className="w-10 h-10 mr-2 rounded-full object-cover"
        />
        <div className="text-gray-200">
          <p className="text-sm font-medium ">{name}</p>
          <p className="text-xs ">{moment(createdAt).fromNow()}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactCard;
