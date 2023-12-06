import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
}
