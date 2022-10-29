import { Octokit } from "octokit";

const TOKEN = process.env.REACT_APP_GITHUB_SECREAT as string;

const octokit = new Octokit({
  auth: TOKEN
});

export const getRepoData = async () => {
  try {
    const { data } = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "angular",
      repo: "angular-cli"
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
