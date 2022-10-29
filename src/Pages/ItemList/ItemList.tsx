import React from "react";
import styled from "styled-components";
import Item from "./Item";

interface Issues {
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

interface IItemListProps {
  issues?: Issues[] | null;
}

const ItemList = ({ issues }: IItemListProps) => {
  return (
    <Container>
      {issues?.map(
        ({ id, number, title, user, created_at, comments, state }) => (
          <Item
            key={id}
            id={id}
            number={number}
            title={title}
            user={user}
            created_at={created_at}
            comments={comments}
            state={state}
          />
        )
      )}
    </Container>
  );
};

export default ItemList;

const Container = styled.ul``;
