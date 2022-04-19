import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrPosts: Post[] = [];

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAllPosts();
    console.log(this.arrPosts)
  }

}
