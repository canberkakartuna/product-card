import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout, Card } from "@/components";
import { useGetItem } from "@/hooks";

export default function Home() {
  const { data } = useGetItem(1);
  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Card />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
