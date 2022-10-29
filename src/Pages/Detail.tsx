import React, { useEffect, useState } from "react";
import { getRepoWithIssueNumber } from "@/lib/api/api";
import { Endpoints } from "@octokit/types";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useMarkdownToHTML from "@/lib/hooks/useMarkdownToHTML";

export type ReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"];

const Detail = () => {
  const [issue, setIssue] = useState<ReposResponse["data"] | null>(null);
  const { issue_number } = useParams();

  const { html } = useMarkdownToHTML(issue?.body ? issue.body : "");

  const response = async (issue_number: number) => {
    const data = await getRepoWithIssueNumber(issue_number);
    setIssue(data);
  };

  useEffect(() => {
    if (issue_number) {
      response(Number(issue_number));
    }
  }, []);

  return (
    <Container>
      <IssueHeaderContainer>
        <AvatarContainer>
          <Image src={issue?.user?.avatar_url} />
        </AvatarContainer>
        <IssueHeader>
          <div>
            <h1>{`#${issue?.number} ${issue?.title}`}</h1>
            <IssueHeaderInfo>
              <span>작성자: {issue?.user?.login}</span>
              <span>작성일: {issue?.created_at}</span>
            </IssueHeaderInfo>
          </div>
          <span>코멘트: {issue?.comments}</span>
        </IssueHeader>
      </IssueHeaderContainer>
      <IssueBody dangerouslySetInnerHTML={{ __html: html }} />
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
const IssueBody = styled.article`
  h3 {
    font-size: 2rem;
  }
`;
