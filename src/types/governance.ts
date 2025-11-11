export interface Proposal {
  id: string;
  protocol: string;
  icon: any;
  title: string;
  tag: string;
  result: string;
  content: string;
  commentLink: string;
  forumContent: string | null;
  forumCreatedAt: string | null;
  endDate: Date;
  hasRationale: boolean;
  voter: {
    icon: string;
    name: string;
    date: string;
  };
  type: string;
}

export interface Protocol {
  name: string;
  value: string;
  icon: any;
  link: string;
  className?: string;
}

export interface ForumPostResponse {
  content?: string;
  createdAt?: string;
}

export interface ParsedForumUrl {
  postId: string;
  postNumber: string;
}

export interface NotionProposalData {
  "Proposal Name": string;
  Voted: string;
  "Comment Draft": string;
  "Communication Rationale": string;
  "Forum Post Link": string;
  "Commented By": string;
  "Start Date": string;
  "End Date": string;
  Type: string;
}

export interface NotionApiResponse {
  success: boolean;
  data: NotionProposalData[];
}
