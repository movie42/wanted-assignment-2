import { Octokit } from "octokit";

const TOKEN = process.env.REACT_APP_GITHUB_SECREAT as string;

const octokit = new Octokit({
  auth: TOKEN
});

export const getData = () => {
  const response = async () => {
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "angular",
      repo: "angular-cli"
    });
    return response;
  };

  const data = response();

  return data;
};
