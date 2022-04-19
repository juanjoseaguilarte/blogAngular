import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];
  id: number = 6;

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
}
