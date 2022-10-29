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
  state: string;
}

const Item = ({
  number,
  id,
  title,
  created_at,
  comments,
  user,
  state
}: IItemProps) => {
  return (
    <Container data-id={id} data-issue-number={number}>
      <Link to={`/${number}`}>
        <h1>{title}</h1>
        <span>{number}</span>
        <span>{state}</span>
        <p>{user?.id}</p>
        <p>{user?.login}</p>
        <p>{user?.avatar_url}</p>
        <p>{created_at}</p>
        <p>{comments}</p>
      </Link>
    </Container>
  );
};

export default Item;

const Container = styled.li``;
