import { createContext, ReactNode, useState } from "react";

export interface RepoListProps {
  number?: number;
  id?: number;
  title?: string;
  user?: {
    id?: number;
    login?: string;
    avatar_url?: string;
    url?: string;
  };
  created_at?: string;
  comments?: number;
}

interface RepoDetailProps extends RepoListProps {
  body: string;
}

interface IssueListContextAPIProps {
  issues?: RepoListProps[];
  setIssues: React.Dispatch<React.SetStateAction<RepoListProps[]>>;
}

interface IssueDetailContextAPIProps {
  detail?: RepoDetailProps;
  setDetail: React.Dispatch<React.SetStateAction<RepoDetailProps>>;
}
export const IssueListContextAPI = createContext<IssueListContextAPIProps>(
  null!
);
export const IssueDetailContextAPI = createContext<IssueDetailContextAPIProps>(
  null!
);
interface ContextAPIProps {
  children: ReactNode;
}

const issueDefaultValue = [
  {
    number: 0,
    id: 0,
    title: "",
    user: {
      id: 0,
      login: "",
      avatar_url: "",
      url: ""
    },
    created_at: "",
    comments: 0
  }
];

const detailDefaultValue = {
  number: 0,
  id: 0,
  title: "",
  user: {
    id: 0,
    login: "",
    avatar_url: "",
    url: ""
  },
  created_at: "",
  comments: 0,
  body: ""
};

export const ContextAPIProvider = ({ children }: ContextAPIProps) => {
  const [issues, setIssues] = useState<RepoListProps[]>(issueDefaultValue);
  const [detail, setDetail] = useState<RepoDetailProps>(detailDefaultValue);

  const issueValue = {
    issues,
    setIssues
  };

  const detailValue = {
    detail,
    setDetail
  };

  return (
    <IssueListContextAPI.Provider value={issueValue}>
      <IssueDetailContextAPI.Provider value={detailValue}>
        {children}
      </IssueDetailContextAPI.Provider>
    </IssueListContextAPI.Provider>
  );
};
