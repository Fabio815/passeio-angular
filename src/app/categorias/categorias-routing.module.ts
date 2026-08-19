import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {
    path: '',//Esta vazio pois quando eu entrar em categoria vai direto a essa página
    component: CategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
