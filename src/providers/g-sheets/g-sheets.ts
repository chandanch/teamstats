import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
* Service for sheet maninpulations via the http 
*/
@Injectable()
export class GSheetsProvider {
  private accessPoint: string = "http://13.126.171.55:9005";
  constructor(public http: HttpClient) {
  }

  /**
   * @desc get the sheet content based on g-sheet id
   * @param {String} sheetId
   * @returns <Observable> 
   */
  getSheetData(sheetId: String) {
    this.accessPoint = this.accessPoint+"/sheetsData?id="+sheetId+"&sheet=1";
    return this.http.get(this.accessPoint);
  }

}
