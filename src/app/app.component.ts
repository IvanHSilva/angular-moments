import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Administrador';
  userData = {
    email: 'adm@source.com',
    role: 'Admin'
  };

  title = 'moments';
}
