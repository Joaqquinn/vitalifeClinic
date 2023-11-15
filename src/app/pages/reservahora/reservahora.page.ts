import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-reservahora',
  templateUrl: './reservahora.page.html',
  styleUrls: ['./reservahora.page.scss'],
})
export class ReservahoraPage implements OnInit {
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  
  constructor() {
    this.setToday();
  }

  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm, MMM d, yyyy');
  }

  dateChanged(value: any) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
    this.showPicker = false;
  }


  ngOnInit() {
  }




  
  
}