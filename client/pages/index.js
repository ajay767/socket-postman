import { useState, useEffect } from 'react';
import Alert from '@components/Alert';
import withAuth from '@lib/withAuth';
import Container from '@layout/Container';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdNotifications } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';
import { useSocket, SocketProvider } from '@context/SocketProvider';
import * as actions from '@actions/user';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '@utils/Api';
import SearchBar from '@components/SearchBar';
import Header from '@front/Header';
import Sidebar from '@front/Sidebar';
import Conversation from '@front/Conversation';
import ContactList from '@front/ContactList';
import Profile from '@components/Profile';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user.profile || !user.name) {
        const data = await getProfile();

        dispatch(actions.updateUser(data.user));
      }
    };

    fetchProfile();
  }, []);
  return (
    <>
      <Container className="text-white h-4/5 w-full md:w-10/12  mx-10  md:mx-auto shadow-2xl overflow-hidden  flex justify-start  ">
        {user.chat_id && (
          <SocketProvider id={user.chat_id}>
            {/* <AnimatePresence>
            {alert && (
              <Alert
                onClose={() => setAlert(false)}
                message={`Hi 😄,
        It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem`}
                title="Welcome to  Gossip"
              />
            )}
          </AnimatePresence> */}

            <Sidebar handleSetting={() => setShowProfile(!showProfile)} />
            <div className="flex flex-col justify-items-stretch w-full  ">
              <div className="h-14">
                <Header />
              </div>
              <div className="grid grid-cols-12 overflow-auto scrollbar-hide   flex-grow ">
                <div className="col-span-3  border-right flex flex-col overflow-y-auto scrollbar-hide">
                  <SearchBar />
                  <div className="flex-grow flex flex-col overflow-y-auto scrollbar-hide ">
                    <ContactList />
                  </div>
                </div>
                <div
                  className={`${
                    showProfile ? 'col-span-6 ' : 'col-span-9'
                  } relative transition-all border-right flex flex-col  overflow-y-auto scrollbar-hide `}
                >
                  <Conversation />
                </div>
                {showProfile && (
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0, transition: { type: 'tween' } }}
                    exit={{ x: '100%', transition: { type: 'tween' } }}
                    className="col-span-3  flex flex-col "
                  >
                    <Profile />
                  </motion.div>
                )}
              </div>
            </div>
          </SocketProvider>
        )}
      </Container>
    </>
  );
}

export default withAuth({ component: Home });
