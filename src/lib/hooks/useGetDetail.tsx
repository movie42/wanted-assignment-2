import { useState } from "react";
import { Endpoints } from "@octokit/types";
import { getRepoWithIssueNumber } from "../api/api";

type ReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"];

const useGetDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<ReposResponse["data"] | null>(null);

  const fetchData = async (issue_number: number) => {
    setIsFetching(true);
    setIsSuccess(null);
    setIsError(false);
    setIsLoading(true);

    try {
      const data = await getRepoWithIssueNumber(issue_number);
      setIsFetching(false);
      setIsSuccess(true);
      setIsLoading(false);
      setData(data);
      return;
    } catch (e) {
      setIsError(true);
      setIsSuccess(true);
      setIsLoading(false);
      setIsFetching(false);
    }
  };

  return { isSuccess, isError, isFetching, isLoading, fetchData, data };
};

export default useGetDetail;
