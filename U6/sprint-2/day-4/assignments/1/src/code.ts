export enum DatabaseModel {
  users = "users",
  videos = "videos",
  notifications = "notifications",
}

export class Model {}
export class UserModel {}
export class ConsumerModel {}

export class CreatorModel {}
export class VideoModel {}

export class NotificationModel {}

export class Database {
  users: User[];
  videos: Video;
}
