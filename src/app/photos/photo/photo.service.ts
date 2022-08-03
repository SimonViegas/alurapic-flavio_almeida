import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const baseUrl = "http://localhost:3000";

@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    console.log(baseUrl + "/" + userName + "/photos");
    return this.http.get<Photo[]>(baseUrl + "/" + userName + "/photos");
  }
}
