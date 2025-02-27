import { Component } from '@angular/core';
import { LeistungsclearingSchritt1Component } from './leistungsclearing-schritt-1/leistungsclearing-schritt-1.component';
import { LeistungsclearingSchritt2Component } from './leistungsclearing-schritt-2/leistungsclearing-schritt-2.component';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-leistungsclearing',
  imports: [LeistungsclearingSchritt1Component, LeistungsclearingSchritt2Component, SharedModule],
  templateUrl: './leistungsclearing.component.html',
  styleUrl: './leistungsclearing.component.scss',
  standalone: true
})
export class LeistungsclearingComponent {

  step: number = 1;
  lastStep: number = 2;

}
