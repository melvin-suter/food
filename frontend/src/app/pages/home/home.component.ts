import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newURL:string = "";
  newTitle:string = "";
  newDescription:string = "";

  goURL:string = "";


  constructor(private api:ApiService, private router:Router) {
  }

  createSpace() {
    this.api.postSpace({
      id: -1,
      title: this.newTitle,
      slug: this.newURL,
      description: this.newDescription
    }).subscribe((item:any) => {
      if(item.slug){  
        this.router.navigate(['app', item.slug]);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  goSpace() {
    this.router.navigate(['app', this.goURL]);
  }
}
