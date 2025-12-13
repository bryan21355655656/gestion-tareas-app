import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private usersUrl = 'http://localhost:3001/api/users';
  private tasksUrl = 'http://localhost:3002/api/tasks';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> { return this.http.get<any[]>(this.usersUrl); }
  createUser(user: any): Observable<any> { return this.http.post<any>(this.usersUrl, user); }

  getTasks(): Observable<any[]> { return this.http.get<any[]>(this.tasksUrl); }
  createTask(task: any): Observable<any> { return this.http.post<any>(this.tasksUrl, task); }
  toggleTask(id: number): Observable<any> { return this.http.put<any>(`${this.tasksUrl}/${id}`, {}); }
  deleteTask(id: number): Observable<any> { return this.http.delete<any>(`${this.tasksUrl}/${id}`); }
}