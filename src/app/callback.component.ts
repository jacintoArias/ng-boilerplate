import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-callback',
  template: ``,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.authService.handleAuthentication();
  }

  ngOnInit() {
  }

}
