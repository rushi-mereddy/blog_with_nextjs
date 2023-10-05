import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout, {name} from '../components/layout';    

export default function FirstPost() {
  return (
    <>
        <Layout>
            <h4> Name: {name} </h4>
        </Layout>
    </>
  );
}