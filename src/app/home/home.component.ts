import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatExpansionModule,MatIcon,MatFormField,MatLabel,MatDatepicker,MatDatepickerModule,MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
