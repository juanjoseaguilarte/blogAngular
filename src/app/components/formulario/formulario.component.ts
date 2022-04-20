
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  arrCategories : Category[] = [];

  constructor(
    private postsService: PostsService,
    private cateforiesService: CategoriesService
  ) {
    this.formulario = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      author: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\https://www\.]/)
      ]),
      fecha: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
    })
    }

  ngOnInit(): void {
    this.arrCategories =this.cateforiesService.getAllCategories();
    //console.log(this.arrCategories)
  }

  recogerDatosForm(){
    this.postsService.agregarPost(this.formulario.value)
    //console.log(this.formulario.errors)
    //console.log(this.formulario.value)
  }
  checkControl(controlName: string, errorName: string): boolean {
    if (this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched) {
        return true;
    } else {
        return false;
    }

  }
}
