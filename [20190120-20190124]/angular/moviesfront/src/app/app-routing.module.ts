import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LoginComponent } from './components/login/login.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';


const routes: Routes = [
  { path : 'movies', component: MovieListComponent},
  { path : 'login', component: LoginComponent},
  { path : 'create', component: MovieEditComponent},
  { path : '', pathMatch : 'full', redirectTo : '/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
