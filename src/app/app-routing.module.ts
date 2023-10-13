import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CreateComponent } from './components/pages/create/create.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PostDetailsComponent } from './components/pages/post-details/post-details.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
