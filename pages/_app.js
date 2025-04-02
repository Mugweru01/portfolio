
// pages/_app.js
import '../styles/globals.css';
import '../styles/pageTransition.css'; // Global CSS for transitions
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Router from 'next/router';

// Dynamically import PageTransition with SSR disabled
const PageTransition = dynamic(
  () => import('../components/PageTransition'),
  { ssr: false }
);

function MyApp({ Component, pageProps, router }) {
  // Scroll restoration on route change
  useEffect(() => {
    const handleRouteChange = () => window.scrollTo(0, 0);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => Router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

  return (
    <Layout>
      <PageTransition route={router.route}>
        <Component {...pageProps} />
      </PageTransition>
    </Layout>
  );
}

export default MyApp;

