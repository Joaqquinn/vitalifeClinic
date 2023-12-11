import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {

  transform(dateString: string): string {
    const date = new Date(dateString);
    const day = this.formatNumber(date.getDate());
    const month = this.getMonthName(date.getMonth());
    const year = date.getFullYear();

    return `${day} de ${month} ${year}`;
  }

  private getMonthName(month: number): string {
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    return monthNames[month];
  }

  private formatNumber(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

}
