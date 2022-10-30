import React from "react";
import { RepoListProps } from "@/lib";
import styled from "styled-components";
import Item from "./Item";

interface IItemListProps {
  issues?: RepoListProps[];
}

const ItemList = ({ issues }: IItemListProps) => {
  return (
    <Container>
      {issues?.map(({ id, number, title, user, created_at, comments }) => (
        <Item
          key={id}
          id={id}
          number={number}
          title={title}
          user={user}
          created_at={created_at}
          comments={comments}
        />
      ))}
    </Container>
  );
};

export default ItemList;

const Container = styled.ul`
  padding: 0;
  box-sizing: border-box;
`;
