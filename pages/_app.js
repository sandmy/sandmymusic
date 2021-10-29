import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Navbar';
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      {/* <div className='footer-box'/> */}
      <Footer />
    </>
  )
}

export default MyApp