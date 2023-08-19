export enum DatabaseModel {
  users = "users",
  posts = "posts",
  comments = "comments",
  likes = "likes",
}

interface IModel {
  model: DatabaseModel;
  id: number;
}
interface IUser extends IModel {
  name: string;
  bio: string;
  email: string;
  follows: number[];
}
interface IPost extends IModel {
  image: string;
  content: string;
  userID: number;
}

interface IComment extends IModel {
  content: string;
  userID: number;
  postID: number;
}

interface ILike extends IModel {
  type: "POST" | "COMMENT";
  userID: number;
  parentID: number;
}
//map for database
type databaseModelMap =
  | {
      model: DatabaseModel.users;
      type: {
        id: number;
        name: string;
        bio: string;
        email: string;
        follows: [];
      };
    }
  | {
      model: DatabaseModel.posts;
      type: Post;
    }
  | {
      model: DatabaseModel.comments;
      type: Comment;
    }
  | {
      model: DatabaseModel.likes;
      type: Like;
    };

export abstract class Model implements IModel {
  model: DatabaseModel;
  id: number;
  constructor(model: DatabaseModel) {
    this.model = model;
    this.id = Math.random();
  }
}

export abstract class User extends Model implements IUser {
  name: string;
  bio: string;
  email: string;
  follows: number[];
  constructor(name: string, bio: string, email: string) {
    super(DatabaseModel.users);
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.follows = [];
    Database.Instance.create({
      model: DatabaseModel.users,
      type: {
        id: this.id,
        name: this.name,
        bio: this.bio,
        email: this.email,
        follows,
      },
    });
  }

  follow(userID: number) {
    this.follows.push(userID);
  }

  get followers() {
    let follower = this.follows.length;
    return follower;
  }

  get posts() {
    let database1 = Database.Instance;
    let posthere = database1.Posts.filter((e) => {
      e.userID === this.id;
    });
    return posthere;
  }
  createPost(image: string, content: string) {
    let database1 = Database.Instance;
    database1.create({
      model: DatabaseModel.posts,
      type: {
        id: this.id,
        content: this.content,
        userID: this.id,
      },
    });
  }
}

export class Post extends Model implements IPost {
  image: string;
  content: string;
  userID: number;
  constructor(image: string, content: string, userID: number) {
    super(DatabaseModel.posts);
    this.image = image;
    this.content = content;
    this.userID = userID;
    Database.Instance.create({
      model: DatabaseModel.posts,
      type: {
        id: this.id,
        image: this.image,
        content: this.content,
        userID: this.userID,
      },
    });
  }
}

export class Comment extends Model implements IComment {
  content: string;
  userID: number;
  postID: number;
  constructor(content: string, userID: number, postID: number) {
    super(DatabaseModel.comments);

    this.content = content;
    this.userID = userID;
    this.postID = postID;

    Database.Instance.create({
      model: DatabaseModel.comments,
      type: {
        id: this.id,
        content: this.content,
        userID: this.userID,
        postID: this.postID,
      },
    });
  }
}

export class Like extends Model implements ILike {
  type: "POST" | "COMMENT";
  userID: number;
  parentID: number;
  constructor(type: "POST" | "COMMENT", userID: number, parentID: number) {
    super(DatabaseModel.likes);
    this.type = type;
    this.userID = userID;
    this.parentID = parentID;
  }
}

//databse class here works
export class Database {
  static isConnected: boolean = false;
  private users: IUser[];
  private posts: IPost[];
  private comments: IComment[];
  private likes: ILike[];

  private static instance: Database;
  private constructor() {
    this.users = [];
    this.posts = [];
    this.comments = [];
    this.likes = [];
  }
  get Users() {
    return this.users;
  }
  get Posts() {
    return this.posts;
  }
  get Comments() {
    return this.comments;
  }
  get Likes() {
    return this.likes;
  }
  static get Instance() {
    return Database.instance;
  }
  static connect() {
    if (Database.isConnected === false) {
      Database.instance = new Database();
      Database.isConnected = true;
    }
    return Database.Instance;
  }
  create({ model, type }: databaseModelMap) {
    if (model === DatabaseModel.users) {
      Database.Instance[model].push(type);
      return Database.Instance[model];
    } else if (model === DatabaseModel.posts) {
      Database.Instance[model].push(type);
      return Database.Instance[model];
    } else if (model === DatabaseModel.comments) {
      Database.Instance[model].push(type);
      return Database.Instance[model];
    } else if (model === DatabaseModel.likes) {
      Database.Instance[model].push(type);
      return Database.Instance[model];
    }
  }

  upsert({ model, type }: databaseModelMap) {
    if (model === DatabaseModel.users) {
      Database.Instance[model] = Database.Instance[model].map((e) => {
        if (e.id == type.id) {
          return type;
        }
        return e;
      });
      return Database.Instance[model];
    } else if (model === DatabaseModel.posts) {
      Database.Instance[model] = Database.Instance[model].map((e) => {
        if (e.id == type.id) {
          return type;
        }
        return e;
      });
      return Database.Instance[model];
    } else if (model === DatabaseModel.comments) {
      Database.Instance[model] = Database.Instance[model].map((e) => {
        if (e.id == type.id) {
          return type;
        }
        return e;
      });
      return Database.Instance[model];
    } else if (model === DatabaseModel.likes) {
      Database.Instance[model] = Database.Instance[model].map((e) => {
        if (e.id == type.id) {
          return type;
        }
        return e;
      });
      return Database.Instance[model];
    }
  }

  delete({ model, type }: databaseModelMap) {
    if (model === DatabaseModel.users) {
      Database.Instance[model] = Database.Instance[model].filter((e) => {
        if (e.id == type.id) {
          return false;
        }
        return true;
      });
      return Database.Instance[model];
    } else if (model === DatabaseModel.posts) {
      Database.Instance[model] = Database.Instance[model].filter((e) => {
        if (e.id == type.id) {
          return false;
        }
        return true;
      });
      return Database.Instance[model];
    } else if (model === DatabaseModel.comments) {
      Database.Instance[model] = Database.Instance[model].filter((e) => {
        if (e.id == type.id) {
          return false;
        }
        return true;
      });
      return Database.Instance[model];
    } else if (model === DatabaseModel.likes) {
      Database.Instance[model] = Database.Instance[model].filter((e) => {
        if (e.id == type.id) {
          return false;
        }
        return true;
      });
      return Database.Instance[model];
    }
  }
}
