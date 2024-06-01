export interface ICms {
  allPageProjects: {
    img: {
      id: number
      url: string
    }[]
    title: string
    description: string
    link: string
  }[]
};

interface IIMage {
  id: number;
  url: string;
}
export interface IGetContentCms {
  img: IIMage[];
  title: string;
  description: string;
  link: string;
};

export interface IGetContent {
  allPageProjects: {
    img: [];
    title: string;
    description: string;
    link: string;
  }[]
}

