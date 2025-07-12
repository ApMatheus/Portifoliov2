export interface Hero {
  title: string;
  description: string;
}

export interface Social {
  link: {
    name: "whatsapp" | "linkedin" | "github" | "instagram";
    link: string;
  }[];
}

export interface About {
  title: string;
  img: {
    url: string;
    imgix_url: string;
  };
  alt: string;
  title_description: string;
  description: string;
}

export interface Stacks {
  title: string;
  stack: {
    title: string;
    icon: {
      url: string;
      imgix_url: string;
    };
    tag: string;
  }[];
}

export interface ProjectItem {
  title: string;
  description: string;
  img: {
    url: string;
    imgix_url: string;
  };
  stacks: string[];
  url_code: string;
  url_demo: string;
}

export interface Project {
  title: string;
  project: ProjectItem[];
}

export interface Timeline {
  title: string;
  feature: {
    start_date: string;
    end_date: string;
    title: string;
    sub_title: string;
    description: string;
    tags: string[];
  }[];
}

export interface Home {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      hero: Hero;
      contact: Social;
      about: About;
      stacks: Stacks;
      projects: Project;
      timeline: Timeline;
    };
  };
}


export interface GitHubData {
  data: number
}