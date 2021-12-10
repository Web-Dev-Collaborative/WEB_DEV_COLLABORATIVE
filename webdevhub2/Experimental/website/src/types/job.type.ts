type Listing = {
  title: string;
  items: string[];
};

export type Job = {
  title: string;
  intro: string;
  paragraphs: string;
  lists: Listing[];
  textAfterTheLists: string;
  rendered?: boolean;
  date?: string;
};
