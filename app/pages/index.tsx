import { NextPage } from 'next';
import Head from 'next/head';
import Dummy from '../components/dummy/Dummy';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dummy value="Hello World"></Dummy>
    </>
  );
};

export default Home;
