import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IItemProps {
  number: number;
  id: number;
  title: string;
  user: {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
  } | null;
  created_at: string;
  comments: number;
}

const Item = ({
  number,
  id,
  title,
  created_at,
  comments,
  user
}: IItemProps) => {
  return (
    <Container data-id={id} data-issue-number={number}>
      <Link to={`/${number}`}>
        <h1>{`#${number} ${title}`}</h1>
        <p>코멘트: {comments}</p>
      </Link>
      <InfoContainer data-user-id={user?.id}>
        <span>
          작성자:
          <a href={`https://github.com/${user?.login}`}>{user?.login}</a>
        </span>
        <p>작성일: {created_at}</p>
      </InfoContainer>
    </Container>
  );
};

export default Item;

const Container = styled.li``;

const InfoContainer = styled.div``;
