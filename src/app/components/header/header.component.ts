import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { GlobalApp } from '../../helpers/isLogged';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _authService: AuthService, public app: GlobalApp) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }
}
