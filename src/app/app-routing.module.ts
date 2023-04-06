import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorgaugeComponent } from './sensorgauge/sensorgauge.component';

const routes: Routes = [
  {
    
      path: "" , redirectTo:"/sensorgauge" , pathMatch:"full" 
    
  },
  {
    
    path: "sensorgauge" , component: SensorgaugeComponent 
  
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
