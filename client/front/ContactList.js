import React from 'react';
import { motion } from 'framer-motion';
import ContactCard from '../components/ContactCard';
function ContactList() {
  const contactData = [
    { profile: '/images/u3.jpeg', name: 'Tarun', createdAt: Date.now() - 4500 },
    {
      profile: '/images/u2.jpeg',
      name: 'Ashutosh singh',
      createdAt: Date.now() - 2500,
    },
    {
      profile: '/images/u4.jpeg',
      name: 'Aparna',
      createdAt: Date.now() - 400500,
    },
    { profile: '/images/u3.jpeg', name: 'Tarun', createdAt: Date.now() - 4500 },
    {
      profile: '/images/u2.jpeg',
      name: 'Ashutosh singh',
      createdAt: Date.now() - 2500,
    },
    {
      profile: '/images/u4.jpeg',
      name: 'Aparna',
      createdAt: Date.now() - 400500,
    },
    { profile: '/images/u3.jpeg', name: 'Tarun', createdAt: Date.now() - 4500 },
    {
      profile: '/images/u2.jpeg',
      name: 'Ashutosh singh',
      createdAt: Date.now() - 2500,
    },
    {
      profile: '/images/u4.jpeg',
      name: 'Aparna',
      createdAt: Date.now() - 400500,
    },
    { profile: '/images/u3.jpeg', name: 'Tarun', createdAt: Date.now() - 4500 },
    {
      profile: '/images/u2.jpeg',
      name: 'Ashutosh singh',
      createdAt: Date.now() - 2500,
    },
    {
      profile: '/images/u4.jpeg',
      name: 'Aparna',
      createdAt: Date.now() - 400500,
    },
    { profile: '/images/u3.jpeg', name: 'Tarun', createdAt: Date.now() - 4500 },
    {
      profile: '/images/u2.jpeg',
      name: 'Ashutosh singh',
      createdAt: Date.now() - 2500,
    },
  ];
  return (
    <>
      {contactData.map((contact, index) => {
        return (
          <ContactCard
            variants={{
              hidden: { opacity: 0, y: -50 * index },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.05 + 0.5 },
              },
            }}
            key={index}
            profile={contact.profile}
            name={contact.name}
            createdAt={contact.createdAt}
          />
        );
      })}
    </>
  );
}

export default ContactList;
