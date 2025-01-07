import { Component } from '@angular/core';
import { Stage } from 'src/models/Stage';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stage.component.html',
})
export class StageComponent {
  allStages: Stage[] = [];
  stages: Stage[] = [];
  search = '';
  constructor(private stageService: StageService) {}
  ngOnInit(): void {
    this.stageService.getAllStages().subscribe((data: Stage[]) => {
      this.allStages = data;
      this.updateItems();
    });
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
    this.stageService
      .deleteStage(id.toString())
      .subscribe(() => this.ngOnInit());
  };
}
