import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  arrCategories : Category[] = [];

  constructor(
    private postsService: PostsService,
    private cateforiesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.arrCategories =this.cateforiesService.getAllCategories();
    console.log(this.arrCategories)
  }

  recogerDatosForm(pForm : any){
    this.postsService.agregarPost(pForm.value)
  }
}
