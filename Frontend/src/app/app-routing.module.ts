import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListComponent } from './business/list/list.component';
import { DetailsComponent } from './business/details/details.component';
import { AddReviewComponent } from './review/add/add-review.component';
import { ListReviewsComponent } from './review/list/list-reviews.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'business', component: ListComponent },
  { path: 'business/:id', component: DetailsComponent },
  { path: 'business/:businessId/reviews', component: ListReviewsComponent },
  { path: 'business/:businessId/add-review', component: AddReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
