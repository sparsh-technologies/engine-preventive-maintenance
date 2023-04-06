import { Component, OnInit } from '@angular/core';
import { NgxGaugeType } from 'ngx-gauge/gauge/gauge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout/module';
import { MatCardModule } from '@angular/material/card';
import { SensorsDataService } from '../services/sensors-data.service';
@Component({
  selector: 'app-sensorgauge',
  templateUrl: './sensorgauge.component.html',
  styleUrls: ['./sensorgauge.component.css']
})


export class SensorgaugeComponent implements OnInit {
  constructor(private service: SensorsDataService) {

  }


  sensordata: any;
  phvalue: any[] = [];
  vibrationvalue: any[] = [];
  pressurevalue: any[] = [];
  viscosityvalue: any[] = [];
  tempvalue: any[] = [];
  tacovalue: any[] = [];
  levelvalue: any[] = [];
  flowratevalue:any[]=[];

  ngOnInit(): void {
    this.service.GetSensorData().subscribe(result => {
      this.sensordata = result;
      if (this.sensordata != null) {
        for (let i = 0; i < this.sensordata.length; i++) {
          //console.log(this.sensordata[i]);
          this.phvalue.push(this.sensordata[i].phvalue);
          this.vibrationvalue.push(this.sensordata[i].vibrationvalue);
          this.pressurevalue.push(this.sensordata[i].pressurevalue);
          this.viscosityvalue.push(this.sensordata[i].viscosityvalue);
          this.tempvalue.push(this.sensordata[i].tempvalue);
          this.tacovalue.push(this.sensordata[i].tacovalue);
          this.levelvalue.push(this.sensordata[i].levelvalue);
          this.flowratevalue.push(this.sensordata[i].flowratevalue);




        }
        this.RenderChart(this.phvalue, this.vibrationvalue, this.pressurevalue, this.viscosityvalue, this.tempvalue, this.tacovalue, this.levelvalue,this.flowratevalue)

      }




    })


  }
  gaugeType: any;
  gaugeValue: any;
  gaugeLabel: any;
  gaugeAppendText: any;
  thresholdConfig: any;

  gaugeType1: any
  gaugeValue1: any
  gaugeLabel1: any
  gaugeAppendText1: any
  thresholdConfig1: any

  gaugeType2: any
gaugeValue2: any
gaugeLabel2: any
gaugeAppendText2: any
thresholdConfig2: any

gaugeType3: any
gaugeValue3: any
gaugeLabel3: any
gaugeAppendText3: any
thresholdConfig3: any

gaugeType4: any
gaugeValue4: any
gaugeLabel4: any
gaugeAppendText4: any
thresholdConfig4: any

gaugeType5: any
gaugeValue5: any
gaugeLabel5: any
gaugeAppendText5: any
thresholdConfig5: any

gaugeType6: any
gaugeValue6: any
gaugeLabel6: any
gaugeAppendText6: any
thresholdConfig6: any

gaugeType7: any
gaugeValue7: any
gaugeLabel7: any
gaugeAppendText7: any
thresholdConfig7: any







  RenderChart(phvalue:any,vibrationvalue: any,pressurevalue: any,viscosityvalue:any,tempvalue:any,tacovalue:any,levelvalue:any,flowratevalue:any) {



    this.gaugeType = "arch" as NgxGaugeType;
    this.gaugeValue = phvalue;
    this.gaugeLabel = "";
    this.gaugeAppendText = "PH";



    this.thresholdConfig = {
      6: {
        color: 'orange',


      },
      8: {
        color: 'green',
        bgOpacity: '0.2'
      },
      8.51: {
        color: 'red',

      }
    };

    this.gaugeType1 = "arch" as NgxGaugeType;
    this.gaugeValue1 = vibrationvalue;
    this.gaugeLabel1 = "VIBRATION";
    this.gaugeAppendText1 = "RPM";

    this.thresholdConfig1 = {
      150: { color: 'orange' },
      1800: { color: 'green' },
      3500.1: { color: 'red' }
    };



    this.gaugeType2 = "arch" as NgxGaugeType;
    this.gaugeValue2 = tacovalue;
    this.gaugeLabel2 = "TACOMETER";
    this.gaugeAppendText2 = "RPM";

    this.thresholdConfig2 = {
      0: { color: 'orange' },
      1500: { color: 'green' },
      2500: { color: 'red' }
    };


    this.gaugeType3 = "arch" as NgxGaugeType;
    this.gaugeValue3 = pressurevalue;
    this.gaugeLabel3 = "pressure";
    this.gaugeAppendText3 = "BAR";

    this.thresholdConfig3 = {
      6: { color: 'orange' },
      8: { color: 'green' },
      8.51: { color: 'red' }
    };
    this.gaugeType4 = "arch" as NgxGaugeType;
    this.gaugeValue4 = viscosityvalue;
    this.gaugeLabel4 = "viscosity";
    this.gaugeAppendText4 = "cSt";

    this.thresholdConfig4 = {
      9: { color: 'red' },
      10: { color: 'green' },
      21: { color: 'red' }
    };
    this.gaugeType5 = "arch" as NgxGaugeType;
    this.gaugeValue5 = tempvalue;
    this.gaugeLabel5 = "Temperature";
    this.gaugeAppendText5 = "°C";

    this.thresholdConfig5 = {
      500: { color: 'green' },
      700: { color: 'orange' },
      850: { color: 'red' }
    };
    this.gaugeType6 = "arch" as NgxGaugeType;
    this.gaugeValue6 = flowratevalue;
    this.gaugeLabel6 = "Flow Rate";
    this.gaugeAppendText6 = "Lpm";

    this.thresholdConfig6 = {
      120: { color: 'green' },
      300: { color: 'orange' },
      501: { color: 'red' }
    };
    this.gaugeType7 = "arch" as NgxGaugeType;
    this.gaugeValue7 = levelvalue;
    this.gaugeLabel7 = "Fuel-level";
    this.gaugeAppendText7 = "%";

    this.thresholdConfig7 = {
      20: { color: 'orange' },
      80: { color: 'green' },
      19: { color: 'red' }
    };





  }


}
