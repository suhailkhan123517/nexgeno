// export interface PostVisitor {
//   id: string;
//   ip?: string;
//   post: Post;
// }

// export interface Post {
//   id: string;
//   title?: string;
//   slug?: string;
//   description?: string;
//   textEditor?: string;
//   imageUrl?: string;
//   publicId?: string;
//   metaTitle?: string;
//   metaDesc?: string;
//   isPublished: boolean;
//   category: Category;
//   author: User;

//   createdAt: number;
// }

// export interface User {
//   name?: string;
//   title: string;
//   imageUrl?: string;
// }

// export interface Category {
//   id: string;
//   catName: string;
// }

export type TPost = {
  id: string;
  title?: string;
  description?: string;
  textEditor?: string;
  imageUrl?: string;
  createdAt: Date;
  category: {
    catName: string;
  };
  author: {
    name?: string;
    title: string;
    imageUrl?: string;
  };
};
