export type TPost = {
  id: string;
  title?: string;
  description?: string;
  textEditor?: string;
  imageUrl?: string;
  publicId?: string;
  metaTitle?: string;
  metaDesc?: string;
  category: {
    id: string;
    catName?: string;
  };
  author: {
    name?: string;
    title: string;
    imageUrl?: string;
  };
};
