type TUser = {
  firstName: string;
  lastName: string;
};

export interface IBlog {
  _id: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  featuredImage: string;
  mainContent: string;
  user: TUser;
  comments: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
