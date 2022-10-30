import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList/ItemList";
import { useGet, useIntersect } from "@/lib";
import { IssueListContextAPI } from "@/lib/state/ContextAPI";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isSuccess, isFetching, isLoading, isError, fetchDatas } =
    useGet();

  const { issues, setIssues } = useContext(IssueListContextAPI);

  const observerRef = useIntersect(
    async (entry, observer) => {
      if (!isFetching) {
        fetchDatas(page);
      }
      observer.unobserve(entry.target);
    },
    { threshold: 1.0 }
  );

  const map = () => {
    const issueList = data
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
    setIssues((pre) => [...pre, ...issueList]);
  };

  useEffect(() => {
    if (isSuccess) {
      setPage((pre) => pre + 1);
      map();
    }
  }, [isSuccess]);

  return (
    <Container>
      {isError ? (
        <div>에러가 발생했습니다. 나중에 다시 시도해주세요.</div>
      ) : (
        <>
          <ItemList issues={issues} />
          {isLoading ? <div>isLoading</div> : null}
          <ObserverContainer ref={observerRef} />
        </>
      )}
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
  height: 2rem;
`;
