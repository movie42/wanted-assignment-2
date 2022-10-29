import { getRepoData } from "@/lib";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Endpoints } from "@octokit/types";
import ItemList from "./ItemList/ItemList";

export type ReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

const Home = () => {
  const [issues, setIssues] = useState<ReposResponse["data"] | null>();

  const getIssues = async () => {
    const response = await getRepoData();

    setIssues(response);
  };

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <Container>
      <ItemList issues={issues} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  box-sizing: border-box;
  margin: 1rem auto;
  padding: 1rem;
`;
