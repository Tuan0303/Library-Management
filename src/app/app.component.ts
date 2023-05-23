import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-management';
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        this.showHeaderFooter = !event.url.includes('/admin')&& !url.includes('/login') && !url.includes('/register');
      }
    });
  }
  // Ở đây, chúng ta sử dụng showHeaderFooter là một biến boolean để xác định xem có hiển thị header và footer hay không.
  // Trong constructor, chúng ta đăng ký một subscriber cho sự kiện NavigationEnd của Router. 
  // Khi sự kiện này xảy ra, chúng ta kiểm tra xem URL hiện tại có chứa '/admin' hay không. 
  // Nếu có, showHeaderFooter sẽ được đặt là false để ẩn header và footer.
}
