import { Routes } from '@angular/router';
import { AntragComponent } from './antrag/antrag.component';
import { LeistungsclearingComponent } from './leistungsclearing/leistungsclearing.component';

export const routes: Routes = [
    {path: '', component: AntragComponent},
    {path: 'antrag', component: AntragComponent},
    {path: 'leistungsclearing', component: LeistungsclearingComponent}
];
