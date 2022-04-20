import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts: Post[] = [];
  categoriaId: any;

  constructor(
    private postsService: PostsService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAllPosts();
    
  }
  ngDoCheck(): void {
        this.arrPosts = this.postsService.getAllPosts();
        this.activatedRoute.params.subscribe( params => 
          this.categoriaId = params['categoryTitle'])

        if(this.categoriaId !== undefined){
          this.arrPosts = this.arrPosts.filter( (post) => post.id == this.categoriaId)
        }else{
          this.arrPosts = this.postsService.getAllPosts();
        }
      }
    

}
