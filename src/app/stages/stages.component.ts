import { Component } from '@angular/core';
import { StageAxiosService } from '../services/stage-axios.service';
import { Stage } from 'src/models/Stage';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
})
export class StagesComponent {
  allStages: Stage[] = [];
  stages: Stage[] = [];
  search = '';
  constructor(private stageService: StageAxiosService) {}
  ngOnInit(): void {
    this.stageService
      .getStages()
      .then((data: Stage[]) => {
        this.allStages = data;
        this.updateItems();
      })
      .catch((err) => console.log(err))
      .finally(() => console.log('finally'));
  }
  updateItems(): void {
    if (!this.search) {
      this.stages = this.allStages;
    } else {
      this.stages = this.allStages.filter((st) =>
        st.description.includes(this.search)
      );
    }
  }
  handleDelete = (id: string) => {
    this.stageService.deleteStage(id.toString()).then(() => this.ngOnInit());
  };
}
