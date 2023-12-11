export type TPost = {
  id: string;
  title: string;
  description: string;
  textEditor?: string;
  imageUrl?: string;
  publicId?: string;
  metaTitle?: string;
  metaDesc?: string;
  category: {
    catName?: string;
  };
  author: {
    name?: string;
    title: string;
    imageUrl?: string;
  };
};
export type TUser = {
  id: string;
  name?: string;
  title?: string;
  role?: string;
  imageUrl?: string;
  publicId?: string;
  email?: string;
  hashedPassword?: string;
};
export type TRole = {
  label: string;
  value: string;
};
