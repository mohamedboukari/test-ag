import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stage } from 'src/models/Stage';
import { Router } from '@angular/router';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-addstage',
  templateUrl: './addstage.component.html',
})
export class AddstageComponent {
  stage: Stage | undefined = undefined;
  formStage: FormGroup = new FormGroup({});

  constructor(private stageService: StageService, private route: Router) {}

  ngOnInit(): void {
    this.formStage = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(0)]),
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      entreprise: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z]/),
      ]),

      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  submit = (e: Event) => {
    e.preventDefault();

    const body: Stage = {
      id: this.formStage.value.id.toString(),
      titre: this.formStage.value.titre || '',
      entreprise: this.formStage.value.entreprise || '',
      description: this.formStage.value.description || '',
      disponible: true,
      nbrInteresse: 0,
    };

    this.stageService.createStage(body).subscribe(() => {
      this.route.navigateByUrl('/stage');
      this.formStage.reset();
    });
  };
}
