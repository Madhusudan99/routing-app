import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { FirstComponent } from './first/first.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path: 'first-component', component: FirstComponent, children:  [
    {path: 'child-a', component: ChildAComponent},
    {path: 'child-b', component: ChildBComponent, children: [
      {path: 'crisis-list', component: CrisisListComponent},
    ]},  
  ]},
  {path: 'second-component',  component: SecondComponent, children: [
    {path:'heroes-list', component: HeroesListComponent},
  ]},

  {path:'', redirectTo: '/first-component', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
