import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) {}

  public showImage: boolean = false;

  /**
   * logShowImage
   */
  public logShowImage() {
    this.showImage = !this.showImage;
    console.log('showImage', this.showImage);

    setTimeout(() => {
      this.router.navigate(['test'])
    }, 1000);
  }

}
