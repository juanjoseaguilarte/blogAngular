import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Post } from 'src/app/interfaces/post';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCategories : Category[] = [];
  arrPosts : Post[] = [];

  constructor(
    private postsService: PostsService,
    private cateforiesService: CategoriesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.arrCategories = this.cateforiesService.getAllCategories();
    this.arrPosts = this.postsService.getAllPosts();
    console.log(this.arrPosts)
    
  }
  filtrar(event : any){
    if (event.target.value) {
      this.router.navigate(['/category/',event.target.value]);
  }
}

}
