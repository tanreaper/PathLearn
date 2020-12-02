
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root'})
export class DashboardService {
    API_URL = environment.API_URL;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    constructor(private http: HttpClient) {}

    public postCourseData(body: any) {
        console.log(body)
        console.log(this.API_URL + '/api/postCourses')
        return body;        
    }

    public getVideo(id: any) {
        return this.http.get(this.API_URL + '/api/youtube/' + id);
        
    }
}