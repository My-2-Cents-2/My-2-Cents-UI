import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from "chartjs-plugin-datalabels";
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { My2CentsService } from '../_services/my2-cents.service';
import { Router } from '@angular/router';
import { Account } from '../_models/account';

@Component({
  selector: 'app-investment-diversity-graph',
  templateUrl: './investment-diversity-graph.component.html',
  styleUrls: ['./investment-diversity-graph.component.css']
})
export class InvestmentDiversityGraphComponent 
{
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  listOfData: number[] = [200, 200, 200, 200];
  chartColors: string[] = ["rgba(68, 209, 243, 0.84)", "rgba(230, 255, 0, 0.84)", "rgba(15, 128, 193, 0.84)", "rgba(230, 160, 0, 0.84)"];
  listOfAccounts: Account[];
  listOfCheckingAccounts: Account[];
  listOfSavingsAccounts: Account[];


  constructor(private twoCentsService: My2CentsService, private router: Router){ 

    // hardcoded to userID 1 for now, will update later
    this.twoCentsService.getUserAccounts(10).subscribe(result => 
      {
        this.listOfAccounts = result;
        this.filterAccountTypeAndGetTotal();
        console.log(result);
      }
      )}

      // Will filter found accounts by type and get totals.

      filterAccountTypeAndGetTotal() {
        this.listOfCheckingAccounts = this.listOfAccounts.filter(x => x.accountType === "Savings");

        this.listOfSavingsAccounts = this.listOfAccounts.filter(x => x.accountType === "Checking");
        let checkingTotal: number = 0;
        let savingsTotal: number = 0;

      // Will add up all checking account totals of a specific user

        this.listOfCheckingAccounts.forEach(el => {

          checkingTotal = checkingTotal + el.totalBalance;
          
        });
      // Will add up all savings account totals of a specific user
      this.listOfSavingsAccounts.forEach(el => {

          savingsTotal = savingsTotal + el.totalBalance;
          
        });

      // Sets data for chart to equal what we just totalled
        this.listOfData[2] = checkingTotal;
        this.listOfData[0] = savingsTotal;


      // Taking old data out of chart
        this.pieChartData.datasets[0].data.pop();
        this.pieChartData.datasets[0].data.pop();
        this.pieChartData.datasets[0].data.pop();
        this.pieChartData.datasets[0].data.pop();

      // Pushing new data into chart
        this.pieChartData.datasets[0].data.push(this.listOfData[0], this.listOfData[1], this.listOfData[2], this.listOfData[3]);

        this.chart?.update();
        this.chart?.render();

      }


     

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
          size: 25,
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
      data: [ this.listOfData[0], this.listOfData[1], this.listOfData[2], this.listOfData[3] ],
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
