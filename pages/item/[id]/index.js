import React from "react";
import { Layout, Card } from "@/components";
import { useGetItem } from "@/hooks";
import { useRouter } from "next/router";
import styles from "@/styles/Item.module.css";

export default function Page({ params }) {
  const { data: itemState, isLoading } = useGetItem(params?.id);
  const router = useRouter();

  const handlePrevious = (e) => {
    e.preventDefault();
    router.push(`/item/${parseInt(params?.id) - 1}`);
  };

  const handleNext = (e) => {
    e.preventDefault();
    router.push(`/item/${parseInt(params?.id) + 1}`);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <Layout>
        <div className={styles.navigations}>
          {params?.id - 1 > 0 && (
            <button onClick={handlePrevious}>Previous Card</button>
          )}
          <button onClick={handleNext}>Next Card</button>
        </div>
        <Card {...itemState} />
      </Layout>
    </main>
  );
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  return {
    props: {
      params,
    },
  };
}
