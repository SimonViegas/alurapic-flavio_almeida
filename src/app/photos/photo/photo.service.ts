import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const baseUrl = "http://localhost:3000";

@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    console.log(baseUrl + "/" + userName + "/photos");
    return this.http.get<Object[]>(baseUrl + "/" + userName + "/photos");
  }
}
