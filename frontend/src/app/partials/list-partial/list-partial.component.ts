import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ListModel } from 'src/app/models/list.model';
import { SpaceModel } from 'src/app/models/spcae.model';
import { VoteModel } from 'src/app/models/vote.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-partial',
  templateUrl: './list-partial.component.html',
  styleUrls: ['./list-partial.component.scss']
})
export class ListPartialComponent {

  @Input('list') list?:ListModel;
  @Output('reload') reloadEvent = new EventEmitter();


  space?:SpaceModel;
  newName:string = "";
  votes?:Observable<VoteModel[]>;


  constructor(private route:ActivatedRoute, private api:ApiService) {
    this.reload();
  }

  reload() {
    this.route.params.subscribe(params => {
      this.api.getSpace(params['slug']).subscribe( (item:SpaceModel) => {
        this.space = item;


        this.votes = this.api.getVotes(this.space.id, this.list!.id);
      });
    });
  }



  createVote(ev:KeyboardEvent) {
    if(ev.code == "Enter") {
      let vote:VoteModel = {
        id: -1,
        name: this.newName
      };

      this.api.postVote(this.space!.id, this.list!.id, vote).subscribe();

      this.newName = "";
      this.reload();
    }
  }


  setVote(voteid:number, change:"up"|"down" = "up"){
    this.api.putVote(this.space!.id, this.list!.id, voteid, change).subscribe();
    this.reload();
  }


  deleteVote(voteid:number){
    this.api.deleteVote(this.space!.id, this.list!.id, voteid).subscribe();
    this.reload();
  }

  deleteList(){
    this.api.deleteList(this.space!.id, this.list!.id).subscribe();
    this.reload();
    this.reloadEvent.emit();
  }
 
 
 
 

}
