import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];
  id: number = 9;

  constructor(private router : Router) { 
    this.arrPosts = POSTS
  }

  getAllPosts(): Post[]{
    return this.arrPosts;
  }

  agregarPost(pForm: any): void {
      const nuevoPost: Post = {
      id: this.id, ...pForm}
      this.arrPosts.push(nuevoPost)
      this.id++;
      this.router.navigate(['/home'])
  }

  getPostById(pId:number): Post | any{
    return this.arrPosts.find( (post) => post.id === pId);
  }
}
