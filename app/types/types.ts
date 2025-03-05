export interface Project {
  id: number;
  name: string;
  date: Date;
  description: string;
  image: string;
  url: string;
}

export type LeetCodeProps = {
  id: number;
  title: string;
  date: string;
  label: string[];
  difficulty: string;
  code: string;
  texts: string;
  O: string;
  S: string;
};
