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

  languages: Language[];

  constructor(private langService: LanguageService, private translate: TranslateService) {
    langService.getLanguages().subscribe( (langs) => this.languages = langs );
  }

  ngOnInit() {
  }

  onLanguageChanged(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
}
