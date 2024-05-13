import { Component} from '@angular/core';
import { NgModel } from '@angular/forms';

export interface Pharmacy {
  number: number;
  count: number;
  address: string;
  name?: string;
  dateOpen?: Date;
  production: boolean;
  namesCompany?: string[];
}
@Component({
  selector: 'page2.component',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  nameCompany: string = '';
  nameCompanySelected: string = '';
  tasks: Pharmacy[] = [];
  newTask: Pharmacy = {
    number: 0,
    count: 0,
    address: 'Не определен',
    production: false
  };
  filteredTasks: Pharmacy[] = [];
  selectedTaskNumber: string = 'all';
  selectedTaskNumberForEdit: number = 1;
  selectedTask: Pharmacy | null = null;
  addTask(titlein: NgModel, creatorin: NgModel) {
    this.newTask.namesCompany = this.nameCompany.split(',');
    this.newTask.number = this.tasks.length + 1;
    this.tasks.push(this.newTask);
    titlein.control.markAsUntouched();
    creatorin.control.markAsUntouched();
    this.resetForm();
  }
  resetForm() {
    this.newTask = {
      number: 0,
      count: 0,
      address: 'Не определен',
      production: false
    };
  }
  loadTaskForEditing() {
    this.selectedTask = this.tasks[this.selectedTaskNumberForEdit-1];
  }
  updateTask() {
    if (this.selectedTask != null)
      this.selectedTask.namesCompany = this.nameCompanySelected.split(',');
    this.selectedTask = null;
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
