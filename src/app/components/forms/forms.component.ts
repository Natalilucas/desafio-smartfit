import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitService } from '../../services/get-unit.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit{
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup

  constructor(private forrmBuilder: FormBuilder, private unitService: GetUnitService){}

    ngOnInit(): void {
      this.formGroup = this.forrmBuilder.group({
        hour: '',
        showClosed: false
      })
      this.unitService.getAllUnits().subscribe(data => {
        this.results = data.locations;
        this.filteredResults = data.locations;
      })
    }

    onSubmit(): void{
     if(!this.formGroup.value.showClosed){
      this.filteredResults = this.results.filter(location=> location.opened === true)
     }
    }

    onClean(): void{
      console.log('')
    }

}
