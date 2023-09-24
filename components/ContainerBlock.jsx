import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'David Pardo - Developer.',
    description: `I've been developing websites for 2 years straight. Get in touch with me to know more.`,
    image: '/preview.jpg',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://davidpardo.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://davidpardo.vercel.app${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="David Pardo" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/davidPardoC/davidpardo/main/public/preview.jpg"
        />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
