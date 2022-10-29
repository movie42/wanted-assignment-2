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
      <HeaderContainer>
        <Link to={`/${number}`}>
          <h1>{`#${number} ${title}`}</h1>
        </Link>
        <p>코멘트: {comments}</p>
      </HeaderContainer>
      <InfoContainer data-user-id={user?.id}>
        <span>
          작성자:
          <a href={`https://github.com/${user?.login}`}>{user?.login}</a>
        </span>
        <span>작성일: {created_at}</span>
      </InfoContainer>
    </Container>
  );
};

export default Item;

const Container = styled.li`
  box-sizing: border-box;
  list-style: none;
  padding: 1rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.color.gray100};
  margin-bottom: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.color.mainHover};
    color: ${(props) => props.theme.color.fontWhite};
    a {
      color: ${(props) => props.theme.color.fontWhite};
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.fontBlack};
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: flex-start;
  margin: 2rem 0;
  h1 {
    width: 100%;
    max-width: 35rem;
    text-overflow: ellipsis;
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    a {
      text-decoration: none;
      color: ${(props) => props.theme.color.fontBlack};
      &:hover {
        color: ${(props) => props.theme.color.mainHover};
      }
    }
    &:nth-child(2) {
      margin-left: 1rem;
    }
  }
`;
