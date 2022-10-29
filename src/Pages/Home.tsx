import { getRepoData } from "@/lib";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Endpoints } from "@octokit/types";

type listUserReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

const Home = () => {
  const [issues, setIssues] = useState<listUserReposResponse["data"] | null>();

  const getIssues = async () => {
    const response = await getRepoData();

    setIssues(response);
  };

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <Container>
      {issues?.map((issue) => (
        <div key={issue.id}>{issue.id}</div>
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.main};
`;
