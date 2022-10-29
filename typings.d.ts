interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    linkToGitHub: string;
    summary: string;
    technologies: Technology[];
}

