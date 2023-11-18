import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceModel } from './models/spcae.model';
import { HttpClient } from '@angular/common/http';
import { ListModel } from './models/list.model';
import { VoteModel } from './models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  backendURL = "https://food.214.li";


  getSpace(slug:string):Observable<SpaceModel>{
    return this.http.get<SpaceModel>(this.backendURL + '/api/space/' + slug);
  }

  postSpace(space:SpaceModel):Observable<SpaceModel>{
    return this.http.post<SpaceModel>(this.backendURL + '/api/space',space);
  }

  getLists(id:number):Observable<ListModel[]>{
    return this.http.get<ListModel[]>(this.backendURL + '/api/space/' + id + "/list");
  }

  postLists(id:number, list:ListModel):Observable<ListModel>{
    return this.http.post<ListModel>(this.backendURL + '/api/space/' + id + "/list",list);
  }


  getVotes(spaceid:number, listid:number):Observable<VoteModel[]>{
    return this.http.get<VoteModel[]>(this.backendURL + '/api/space/' + spaceid + "/list/" + listid);
  }

  postVote(spaceid:number, listid:number, vote:VoteModel):Observable<VoteModel>{
    return this.http.post<VoteModel>(this.backendURL + '/api/space/' + spaceid + "/list/" + listid,vote);
  }

  putVote(spaceid:number, listid:number, voteid:number, change:"up"|"down" = "up"):Observable<VoteModel>{
    return this.http.put<VoteModel>(this.backendURL + '/api/space/' + spaceid + "/list/" + listid +"/" + voteid, {"change": change});
  }

  deleteVote(spaceid:number, listid:number, voteid:number):Observable<any>{
    return this.http.delete<any>(this.backendURL + '/api/space/' + spaceid + "/list/" + listid +"/" + voteid);
  }

  deleteList(spaceid:number, listid:number):Observable<any>{
    return this.http.delete<any>(this.backendURL + '/api/space/' + spaceid + "/list/" + listid );
  }
}
