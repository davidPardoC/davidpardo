import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home({ repositories }) {
  const { theme, setTheme } = useTheme();
  /* const [repositories, setRepos] = useState() */
  useEffect(()=>{
    setTheme("dark")
  },[])
  return (
    <ContainerBlock
      title="David Pardo - Developer."
      description="This is my developer portafolio."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
