import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];

  constructor() { 
    this.arrPosts = POSTS
  }


  agregarPost(){

  }

  getAllPosts(): Post[]{
    return this.arrPosts;
  }


}
