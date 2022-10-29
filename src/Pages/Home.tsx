import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList/ItemList";
import { getRepoData, useIntersect } from "@/lib";
import { IssueListContextAPI } from "@/lib/state/ContextAPI";

const Home = () => {
  // const [page, setPage] = useState(0);
  const { issues, setIssues } = useContext(IssueListContextAPI);

  const observerRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);

    console.log("infinity", page);
    // getIssues(page);
    setPage((pre) => pre + 1);
  });

  const getIssues = async (page = 0) => {
    const response = await getRepoData(page);

    const issueList = response
      ?.filter((issue) => issue.state === "open")
      .map((issue) => ({
        id: issue?.id,
        number: issue?.number,
        title: issue?.title,
        user: {
          id: issue?.user?.id,
          login: issue?.user?.login,
          avatar_url: issue?.user?.avatar_url,
          url: issue?.user?.url
        },
        created_at: issue?.created_at,
        comments: issue?.comments
      }));
  };

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <Container>
      <ItemList issues={issues} getIssues={getIssues} />
      <ObserverContainer ref={observerRef}>loading</ObserverContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  box-sizing: border-box;
  margin: 1rem auto;
  padding: 1rem;
`;

const ObserverContainer = styled.div`
  background-color: red;
`;
