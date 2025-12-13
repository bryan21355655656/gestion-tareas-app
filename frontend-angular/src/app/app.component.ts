import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.services';


@Component({
  selector: 'app-root',
  standalone: false,  // <--- ¡ESTA ES LA LÍNEA MÁGICA QUE TE FALTA!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  tasks: any[] = [];
  
  newUser = { name: '', email: '' };
  newTask = { title: '', userId: null };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.api.getUsers().subscribe((data: any) => this.users = data);
    this.api.getTasks().subscribe((data: any) => this.tasks = data);
  }

  addUser() {
    if(this.newUser.name && this.newUser.email) {
      this.api.createUser(this.newUser).subscribe(() => {
        this.loadData();
        this.newUser = { name: '', email: '' }; 
      });
    }
  }

  addTask() {
    if(this.newTask.title && this.newTask.userId) {
      this.api.createTask(this.newTask).subscribe(() => {
        this.loadData();
        this.newTask = { title: '', userId: null }; 
      });
    }
  }

  toggleTask(id: number) {
    this.api.toggleTask(id).subscribe(() => this.loadData());
  }

  deleteTask(id: number) {
    this.api.deleteTask(id).subscribe(() => this.loadData());
  }

  getUserName(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    return user ? user.name : 'Desconocido';
  }
}