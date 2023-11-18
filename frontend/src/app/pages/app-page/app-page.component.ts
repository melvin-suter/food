import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ListModel } from 'src/app/models/list.model';
import { SpaceModel } from 'src/app/models/spcae.model';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent {
  space?:SpaceModel;
  newTitle:string = "";
  selectedType:"list"|"vote" = "list";

  lists?:Observable<ListModel[]>;

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) {
    this.reload();
  }

  reload() {
    this.route.params.subscribe(params => {
      this.api.getSpace(params['slug']).subscribe( (item:SpaceModel) => {
        if(!item.id) {
          this.router.navigate(['/']);
        }
        this.space = item;


        this.lists = this.api.getLists(this.space.id);
      });
    });
  }


  createList(ev:KeyboardEvent) {
    if(ev.code == "Enter") {
      let list:ListModel = {
        id: -1,
        title: this.newTitle,
        type: this.selectedType
      };

      this.api.postLists(this.space!.id, list).subscribe();

      this.newTitle = "";
      this.reload();
    }
  }
 


}
