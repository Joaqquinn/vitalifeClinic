import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {

  transform(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    const formattedDay = this.formatNumber(date.getDate());
    const formattedMonth = this.getMonthName(date.getMonth());
    const formattedYear = date.getFullYear();

    return `${formattedDay} de ${formattedMonth} ${formattedYear}`;
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
