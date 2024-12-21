import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stage } from 'src/models/Stage';
import { StageAxiosService } from '../services/stage-axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
})
export class AddStageComponent {
  stage: Stage | undefined = undefined;
  formStage: FormGroup = new FormGroup({});

  constructor(private stageService: StageAxiosService, private route: Router) {}

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

    this.stageService.createStage(body).then(() => {
      this.route.navigateByUrl('/stage');
      this.formStage.reset();
    });
  };
}
