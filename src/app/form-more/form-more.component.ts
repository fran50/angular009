import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-more',
  templateUrl: './form-more.component.html',
  styleUrls: ['./form-more.component.css']
})
export class FormMoreComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: this.formBuilder.array([])
    });
  }

  anadirNuevaDirecion() {
    //this.direccion.push(new FormControl());
    this.direccionArchivos.push(this.nuevaDireccion());
  }
  private nuevaDireccion() {
    return this.formBuilder.group({
      zip: ['', Validators.required],
      texto: ['', Validators.required]
    });
  }

  get direccionArchivos() {
    return this.form.get("direccion") as FormArray;
  }

  save() {
    console.log(this.form.value);
  }
}
