import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamaComponent } from './dama/dama.component';
import { CaballeroComponent } from './caballero/caballero.component';
import { ChildrenComponent } from './children/children.component';
import { VestidoComponent } from './dama/vestido/vestido.component';

export const routes: Routes = [
  { path: 'dama', component: DamaComponent },
  { path: 'caballero', component: CaballeroComponent },
  { path: 'children', component: ChildrenComponent },
  {path: 'vestido', component: VestidoComponent},
  { path: '', redirectTo: './dama/vestido', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

