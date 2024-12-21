import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Stage } from 'src/models/Stage';

@Injectable({
  providedIn: 'root',
})
export class StageAxiosService {
  private apiUrl = 'http://localhost:3000/stage';
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async createStage(Stage: Stage): Promise<Stage> {
    const response = await this.axiosInstance.post('/', Stage);
    return response.data;
  }

  async getStages(): Promise<Stage[]> {
    const response = await this.axiosInstance.get('/');
    return response.data;
  }

  async getStage(id: string): Promise<Stage> {
    const response = await this.axiosInstance.get(`/${id}`);
    return response.data;
  }

  async updateStage(id: string, Stage: Stage): Promise<Stage> {
    const response = await this.axiosInstance.put(`/${id}`, Stage);
    return response.data;
  }

  async deleteStage(id: string): Promise<void> {
    await this.axiosInstance.delete(`/${id}`);
  }
}
