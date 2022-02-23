import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Caraousel from '../components/Carousel';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Shopee Indonesia | Jual Beli di Ponsel dan Online</title>
      </Head>
      <body>
        <div>
          <Header />
          <div className="m-10 flex flex-row justify-center items-center mx-auto">
            <div className="mr-4">
              <Caraousel />
            </div>
            <div className="flex flex-col justify-between w-1/6">
              <img src="/assets/carousel/banner4.jpeg" />
              <img src="/assets/carousel/banner5.png" />
            </div>
          </div>
        </div>
      </body>
    </main>
  );
};

export default Home;
