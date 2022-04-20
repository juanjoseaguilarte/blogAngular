import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: BlogComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'post/:idpost', component: ViewComponent },
  { path: 'category/:categoryTitle', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
