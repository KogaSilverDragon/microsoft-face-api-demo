import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable()
export class MscsFaceApiService {
  constructor(private http: HttpClient) { }

  private GetHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type':'application/json',
      'Ocp-Apim-Subscription-Key': environment.subscriptionKey
    });
  }

  private GetParameters(): HttpParams {
    return new HttpParams({
      fromObject: {
        returnFaceId: 'true',
        returnFaceLandmarks: 'false',
        returnFaceAttributes: 'age,gender,emotion,hair'
      }
    });
  }

  public Detect(_imageUrl: string): Observable<any> {
    const data = {
      url: _imageUrl
    };
    return this.http.post(
      environment.FaceAPI_detect,
      data,
      {
        headers: this.GetHeader(),
        params: this.GetParameters()
      });
  }

}
