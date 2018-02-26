import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { GSheetsProvider } from '../../providers/g-sheets/g-sheets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loading;
  private teamStats: any;
  private sheetId = "1sH2CD9NAB1BgAEkDjYjExzLIoDT47J5RSE22PJFMO_E";

  constructor(public navCtrl: NavController, 
    private gSheetsProvider: GSheetsProvider,
    private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    // get the sheet data once the page is loaded
    this.loading = this.loadingController.create({
      content: `Loading data..`,
      spinner: 'dots',
    })
    this.loading.present();
    this.fetchData();
  }

  fetchData() {
    this.gSheetsProvider.getSheetData(this.sheetId).subscribe(
      (sheetData: any) => {
        console.log("Sheets Data", sheetData);
        this.teamStats = sheetData["rows"];
        this.loading.dismiss();
      }
    )
  }

  /**
   * @desc Get the updated data from sheet
   * @param refresher 
   */
  getUpdates(refresher: any) {
    this.gSheetsProvider.getSheetData(this.sheetId).subscribe(
      (sheetData: any) => {
        console.log("Sheets Data", sheetData);
        this.teamStats = sheetData["rows"];
        refresher.complete();
      }
    )
  }

}
