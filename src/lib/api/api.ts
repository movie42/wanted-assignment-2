import { Endpoints } from "@octokit/types";
import { Octokit } from "octokit";

export type ReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

const TOKEN = process.env.REACT_APP_GITHUB_SECREAT as string;

const octokit = new Octokit({
  auth: TOKEN
});

export const getRepoData = async (page = 0, per_page = 20) => {
  const { data, status } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues",
    {
      owner: "angular",
      repo: "angular-cli",
      state: "open",
      sort: "comments",
      direction: "desc",
      page,
      per_page
    }
  );

  if (status > 399) {
    throw new Error("에러가 발생했습니다.");
  }

  return data;
};

export const getRepoWithIssueNumber = async (issue_number: number) => {
  const { data, status } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues/{issue_number}",
    {
      owner: "angular",
      repo: "angular-cli",
      issue_number
    }
  );

  if (status !== 200) {
    throw new Error("이슈를 불러올 수 없습니다.");
  }

  return data;
};
