import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignincontainerComponent } from './signincontainer/signincontainer.component';
import { SignupComponent } from './signup/signup.component';
import { StarterComponent } from './starter/starter.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {path:'', redirectTo:'/starter', pathMatch:'full'},
  {path:'starter', component: StarterComponent},
  {path:'signin', component: SignincontainerComponent, ...canActivate(redirectLoggedInToHome)},
  {path: 'home', component: HomeComponent,...canActivate(redirectUnauthorizedToLogin),},
  {path: 'about', component: AboutComponent, ...canActivate(redirectUnauthorizedToLogin),},
  {path: 'course', component: CourseComponent, ...canActivate(redirectUnauthorizedToLogin),},
  {path: 'contact', component: ContactComponent, ...canActivate(redirectUnauthorizedToLogin),},
  {path: 'blog', component: BlogComponent, ...canActivate(redirectUnauthorizedToLogin),},
  {path: 'profile', component:ProfileComponent,...canActivate(redirectUnauthorizedToLogin),},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[StarterComponent,HeaderComponent, FooterComponent, SignincontainerComponent, HomeComponent, AboutComponent, CourseComponent, ContactComponent, BlogComponent, LoginComponent, SignupComponent, ProfileComponent,  PagenotfoundComponent]
