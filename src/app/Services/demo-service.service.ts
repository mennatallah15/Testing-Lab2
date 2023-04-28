import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoServiceService {
  constructor() {}
  public getService() {
    return 'service is here';
  }
}
