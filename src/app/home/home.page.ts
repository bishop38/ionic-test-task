import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { ContactPayload, Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  contacts: ContactPayload[] = [];
  barcodes: Barcode[] = [];
  isSupported = false;
  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
    this.loadContacts();
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();

    this.barcodes.push(...barcodes);
    let result = this.barcodes?.[this.barcodes.length - 1];
    const alert = await this.alertController.create({
      header: `Result scanning:`,
      message: `${result?.displayValue}`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async loadContacts() {
    try {
      const permission = await Contacts.requestPermissions();
      if (!permission?.contacts) return;
      else if (permission?.contacts === 'granted') {
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            phones: true,
          },
        });
        this.contacts = result.contacts;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
