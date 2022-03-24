import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from "chartjs-plugin-datalabels";
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-investment-diversity-graph',
  templateUrl: './investment-diversity-graph.component.html',
  styleUrls: ['./investment-diversity-graph.component.css']
})
export class InvestmentDiversityGraphComponent 
{
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  listOfData: number[] = [500, 400, 250, 100];
  chartColors: string[] = ["rgba(68, 209, 243, 0.84)", "rgba(230, 255, 0, 0.84)", "rgba(15, 128, 193, 0.84)", "rgba(230, 160, 0, 0.84)"];

  chartGroup = new FormGroup({
    myData: new FormControl(""),
    myData2: new FormControl(""),
    myData3: new FormControl(""),
    myData4: new FormControl("")
  });

  constructor(){ }

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: "rgb(126, 104, 6)", 
          font: {
            size: 25,
            family: 'Arial, Helvetica, sans-serif'
          }
        }
      },
      datalabels: {
        color: "#F",
        font: {
          size: 30,
          family: 'Arial, Helvetica, sans-serif'
        },
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Checking' ], [ 'Crypto' ], ['Savings'], 'Stocks'],
    datasets: [ {
      data: [ this.listOfData[1], this.listOfData[2], this.listOfData[3], this.listOfData[4] ],
      backgroundColor: this.chartColors,
      //border color is black, hover is the color theme that was given for buttons, and the hoverBorderColor stays the same when hovered on.
      borderColor: "#F",
      hoverBackgroundColor: "rgb(126, 104, 6)",
      hoverBorderColor: "#F"
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
