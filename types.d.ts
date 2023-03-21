interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Slug {
  _type: "slug";
  current: string;
}

interface SanityDocument {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Question extends SanityDocument {
  _type: "question";
  content?: string;
  answers?: string[];
  image?: SanityImage;
}

export interface Category extends SanityDocument {
  _type: "category";
  title: string;
  questions: Question[];
  rules: string[];
  slug: Slug
}
