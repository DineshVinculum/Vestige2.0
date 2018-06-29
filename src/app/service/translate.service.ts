import { Injectable } from '@angular/core';
import { TRANSLATIONS } from '../translations'


@Injectable()
export class TranslateService {

  private currentLanguage = 'en';

  constructor() { }

  translate(str) {
    return TRANSLATIONS.filter(enter => enter['en'] === str)[0][this.currentLanguage];
  }

  selectLanguage(language) {
    this.currentLanguage = language;
  }

}