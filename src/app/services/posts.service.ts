import { Subject } from 'rxjs';
import { Post } from "../models/posts.model";
import { Injectable } from '@angular/core';
import * as  firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<any[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
      );
  }
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }
  removePost(i: number) {
    this.posts.splice(i,1);
    this.savePosts();
    this.emitPosts();
  }

  onLike(i: number) {
    this.posts[i].loveIts++;
    this.savePosts();
    this.emitPosts();
    return this.posts[i].loveIts;
  }
  onUnLike(i: number) {
    this.posts[i].loveIts--;
    this.savePosts();
    this.emitPosts();
    return this.posts[i].loveIts;
  }

}