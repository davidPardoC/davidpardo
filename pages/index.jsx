import React, { useEffect } from 'react';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';
import { useTheme } from 'next-themes';
import ContainerBlock from '../components/ContainerBlock';
import FavouriteProjects from '../components/FavouriteProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';

export default function Home({ repositories }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContainerBlock title="David Pardo - Developer." description="Welcome to my portafolio.">
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
