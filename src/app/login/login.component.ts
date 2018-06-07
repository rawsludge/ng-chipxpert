import { LanguageService } from './../language.service';
import { Language } from './../models/language.model';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private langService: LanguageService) {
  }

  ngOnInit() {
  }

  getLanguages() {
    return this.langService.getLanguages();
  }
}
