import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import store from './../store';
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css';
import './../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <Component key={router.route} {...pageProps} />
      </Provider>
    </AnimatePresence>
  );
}

export default MyApp;
