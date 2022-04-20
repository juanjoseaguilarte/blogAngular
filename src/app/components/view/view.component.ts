import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   miPost : Post | any;
 
  constructor(
    private activatedRoute : ActivatedRoute,
    private postsServices : PostsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = parseInt(params['idpost']);
      // console.log(id)
      this.miPost = this.postsServices.getPostById(id);
    })
    // console.log(this.miPost)
  }
}
