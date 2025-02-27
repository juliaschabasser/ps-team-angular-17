import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-antrag',
  imports: [SharedModule],
  templateUrl: './antrag.component.html',
  styleUrl: './antrag.component.scss',
  standalone: true
})

export class AntragComponent implements OnInit {

  constructor(private fb: FormBuilder, public backendService: BackendService) {}

  public antragsForm: any;
  public grade: any;

  ngOnInit(): void {
    this.antragsForm = this.fb.group({
      ifa: [''],
      fswkundinnennummer: [''],
      anrede: ['', Validators.required],
      personenLebensgemeinschaft: this.fb.array([])
    })

    this.grade = this.backendService.getAkademischeGrade();
  }

  get personenLebensgemeinschaft() {
    return this.antragsForm.controls["personenLebensgemeinschaft"];
  }

  addpersonenLebensgemeinschaft() {
    const personLebensgemeinschaftForm = this.fb.group({
        familienname: ['', Validators.required],
        vorname: ['', Validators.required]
    });
  
    this.personenLebensgemeinschaft.push(personLebensgemeinschaftForm);
  }

  submitForm() {
    console.log(this.antragsForm);
  }
  
}
