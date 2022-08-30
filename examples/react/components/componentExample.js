import Head from 'next/head';

export default function ComponentExample({children, title}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}
