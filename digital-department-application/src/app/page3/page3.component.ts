import { Component} from '@angular/core';
import { NgModel } from '@angular/forms';

export interface Suppliers {
  number: number;
  fio?: string;
  suppliedDrugs?: string[];
  deliveryDate?: Date;
  isAbroad: boolean;
  count: number;
}

@Component({
  selector: 'page3.component',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  drugs: string = '';
  drugsSelected: string = '';
  suppliers: Suppliers[] = [];
  newSuppliers: Suppliers = {
    number: 0,
    count: 0,
    isAbroad: false
  };
  selectedSupplyNumber: string = 'all';
  selectedSupplyNumberForEdit: number = 1;
  selectedSupply: Suppliers | null = null;
  addTask(titlein: NgModel, creatorin: NgModel) {
    this.newSuppliers.suppliedDrugs = this.drugs.split(',');
    this.newSuppliers.number = this.suppliers.length + 1;
    this.suppliers.push(this.newSuppliers);
    titlein.control.markAsUntouched();
    creatorin.control.markAsUntouched();
    this.resetForm();
  }
  resetForm() {
    this.newSuppliers = {
      number: 0,
      count: 0,
      isAbroad: false
    };
  }
  loadTaskForEditing() {
    this.selectedSupply = this.suppliers[this.selectedSupplyNumberForEdit-1];
  }
  updateTask() {
    if (this.selectedSupply != null)
      this.selectedSupply.suppliedDrugs = this.drugsSelected.split(',');
    this.selectedSupply = null;
  }
  rejectNonNumeric(event: { key: string; preventDefault: () => void; }): void {
    // Если введенное значение не является числом, запретим его ввод
    if (event.key && !event.key.match(/^\d+$/)) {
      event.preventDefault();
    }
  }
  onDateInput(event: any) {
    const input = event.target.value;
    const formattedInput = input
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    event.target.value = formattedInput;
  }
}
