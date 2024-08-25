import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../../../environments/environment";
import HomeDTO from "../interfaces/home.dto";
import ResponseDTO from "../../../../../core/DTOs/response.dto";

@Injectable({
  providedIn: "root"
})
class HomeService {
  constructor(
    private http: HttpClient
  ) { }

  home(): Observable<ResponseDTO<HomeDTO>> {
    return this.http.get<ResponseDTO<HomeDTO>>(environment.url + "home");
  }
}

export default HomeService;
