export interface Project {
  id: number;
  name: string;
  date: Date;
  description: string;
  image: string;
  url: string;
}

export type Props = {
  id: number;
  title: string;
  slug: string;
  label: string[];
  difficulty: string;
};
