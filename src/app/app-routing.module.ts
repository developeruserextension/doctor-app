import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinzocdocComponent } from './about/joinzocdoc/joinzocdoc.component';
import { CareerListComponent } from './about/career-list/career-list.component';
import { ThankyouComponent } from './about/joinzocdoc/join-form/thankyou/thankyou.component';

const routes: Route[]= [
  { path: '' , redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'patient/s', component: ServicesComponent },
  { path: 'about',component: AboutComponent,},
  { path: 'about/join',component: JoinzocdocComponent},
  { path: 'about/join/thankyou',component: ThankyouComponent},
  { path: 'about/career-list',component:CareerListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
