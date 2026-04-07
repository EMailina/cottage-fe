import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  items: MenuItem[] = [];
  currentLang = 'sk';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('sk');
    this.translate.use('sk');
    this.currentLang = 'sk';
    this.loadMenu();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      this.loadMenu();
    });
  }

  loadMenu() {
    this.items = [
      { label: this.translate.instant('menu.home'), routerLink: '/home' },
      { label: this.translate.instant('menu.about'), routerLink: '/about' },
      { label: this.translate.instant('menu.gallery'), routerLink: '/gallery' },
      { label: this.translate.instant('menu.history'), routerLink: '/history' },
      { label: this.translate.instant('menu.facilities'), routerLink: '/facilities' },
      { label: this.translate.instant('menu.attractions'), routerLink: '/attractions' },
      { label: this.translate.instant('menu.contact'), routerLink: '/contact' }
    ];
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  getFlagPath(lang: string) {
    return `assets/images/flags/${lang}.png`;
  }
}