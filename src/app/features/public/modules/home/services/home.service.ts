import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../../../environments/environment";
import HomeDTO from "../interfaces/home.dto";

@Injectable({
  providedIn: "root"
})
class HomeService {
  constructor(
    private http: HttpClient
  ) { }

  home(): Observable<HomeDTO> {
    return this.http.get<HomeDTO>(environment.url + "home");
  }
}

export default HomeService;
