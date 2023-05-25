import { Component, Input } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  //xử lý tăng giảm số lượng sách
  quantity: number = 1;
  increaseQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  //darkmode
  darkMode = false;
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  //call apibook service
  book: any;
  constructor(private bookApi: BookService){}
  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.bookApi.getBook().subscribe(
      (response) => {
        this.book = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
