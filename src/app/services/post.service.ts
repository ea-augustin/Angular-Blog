import {Injectable} from '@angular/core';
import {Post} from "../models/post";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post>();

  constructor() {
  }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post);
    // @ts-ignore
    this.postsUpdated.next([...this.posts]);
  }
}
