import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.css']
})
export class ToggleThemeComponent {
  isDarkMode = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.setDarkMode();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.setDarkMode();
      localStorage.setItem('theme', 'dark');
    } else {
      this.setLightMode();
      localStorage.setItem('theme', 'light');
    }
  }

  setDarkMode() {
    document.body.classList.add('dark-theme');
  }

  setLightMode() {
    document.body.classList.remove('dark-theme');
  }
}
