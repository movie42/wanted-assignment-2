import { Octokit } from "octokit";

const TOKEN = process.env.REACT_APP_GITHUB_SECREAT as string;

const octokit = new Octokit({
  auth: TOKEN
});

export const getRepoData = async (page = 1, per_page = 20) => {
  try {
    const { data } = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "angular",
      repo: "angular-cli",
      sort: "comments",
      direction: "desc",
      page,
      per_page
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRepoWithIssueNumber = async (issue_number: number) => {
  try {
    const { data } = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner: "angular",
        repo: "angular-cli",
        issue_number
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
