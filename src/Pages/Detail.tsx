import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetDetail } from "@/lib";

import MarkdownContainer from "./Details/MarkdownContainer";

const Detail = () => {
  const { issue_number } = useParams();
  const { isLoading, fetchData, data } = useGetDetail();

  useEffect(() => {
    if (issue_number) {
      fetchData(Number(issue_number));
    }
  }, []);

  return isLoading ? (
    <div>로딩중</div>
  ) : (
    <Container>
      <IssueHeaderContainer>
        <AvatarContainer>
          <Image src={data?.user?.avatar_url} />
        </AvatarContainer>
        <IssueHeader>
          <div>
            <h1>{`#${data?.number} ${data?.title}`}</h1>
            <IssueHeaderInfo>
              <span>작성자: {data?.user?.login}</span>
              <span>작성일: {data?.created_at}</span>
            </IssueHeaderInfo>
          </div>
          <span>코멘트: {data?.comments}</span>
        </IssueHeader>
      </IssueHeaderContainer>
      {data?.body ? (
        <MarkdownContainer markdown={data?.body} />
      ) : (
        <div>본문을 불러올 수 없습니다.</div>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1020px;
  padding: 1rem 2rem;
  margin: 0 auto;
`;
const IssueHeaderContainer = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr;
  margin-bottom: 2rem;
`;
const IssueHeader = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: flex-start;
  h1 {
    width: 100%;
    font-size: 2rem;
  }
`;

const AvatarContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const IssueHeaderInfo = styled.div`
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
