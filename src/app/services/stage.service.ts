import { Injectable } from '@angular/core';
import { Stage } from 'src/models/Stage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StageService {
  api = 'http://localhost:3000/stages';

  constructor(private http: HttpClient) {}

  createStage(Stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(this.api, Stage);
  }

  getAllStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.api);
  }

  getStageById(id: string): Observable<Stage> {
    return this.http.get<Stage>(`${this.api}/${id}`);
  }

  updateStage(id: string, Stage: Stage): Observable<Stage> {
    return this.http.put<Stage>(`${this.api}/${id}`, Stage);
  }

  deleteStage(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
