export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export interface cosplay {
  master_id: string;
  cosplay: string;
  type: number;
  likecount: number;
  favoritecss: string;
  favoritecount:number;
  title:string;
  thumbnail_src:string;
  display_src:string;
}

export interface cosplayType {
  type: string;
  type_id: string;
}

export interface ReturnData {
  data: string;
  subscribe: string;
}
