import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'my-form',
  templateUrl: 'form.html'
})
export class FormComponent {

  @Input() inputs = [];
  inputsForms = [];
  form: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {}

  ngOnInit(){
    console.log(this.inputs);
    this.form = this.makeForm;
    this.inputsForms = this.inputs;
  }

  private get makeForm(){
    let inputs = {};
    this.inputs.forEach(item => {
      inputs[item.name] = [item.value || '']
    })
    return this.fb.group(inputs);
  }

}
