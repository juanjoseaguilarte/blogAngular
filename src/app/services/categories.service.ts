import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { CATEGORIES } from '../db/categories.db';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private arrCategories: Category[];
  private arrPosts: Post[];

  constructor() {
    this.arrCategories = CATEGORIES;
    this.arrPosts = POSTS;
   }

  getAllCategories(){
    return this.arrCategories;
  }
  
  getPostsByCategoria(pCat : Category){
    return this.arrPosts.filter( (post) => { post.category === pCat.id})
  }
}
