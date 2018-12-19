import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  months: Array<any> = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  years: Array<any> = ["2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2011", "2010"];
  formation: any = {};
  formationData: Array<any> = [
    {
      id: 0,
      name: 'formation 1',
      ville: 'Tanger',
      ecole: 'Université Tanger - Abdelmalek Essaâdi ',
      moisDebut: '01',
      anneeDebut: '2016',
      moisFin: '01',
      anneeFin: '2017',
      description: 'Technique developpement informatique '
    }];
  ShowForm: Boolean = false;
  isNow: Boolean = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showFormUpdate(index: number) {
    this.formation = Object.assign({}, this.formationData[index]);;
    this.ShowForm = true
  }
  showForm() {
    this.ShowForm = true;
    this.formation = {};
  }

  remove(index: number) {
    this.formationData.splice(index, 1);
  }

  ajouterFormation() {
    if (this.formation.id || this.formation.id == 0) {
      this.formationData[this.formation.id] = this.formation;
    } else {
      this.formation.id = this.formationData.length;
      this.formationData.push(this.formation);

    }
    this.formation = {};
    this.ShowForm = false;
    this.isNow = false;

  }

  setDateNow() {
    let date: any = new Date();
    this.formation.moisFin = date.getMonth()+1;
    this.formation.anneeFin = date.getFullYear();
    console.log(date.getMonth());
  }

  getShortNameEcole(value: string): string {
    return (value.length > 15) ? value.substring(0, 10) + "..." : value;
  }
  getShortNameDescription(value: string): string {
    return (value.length > 15) ? value.substring(0, 30) + "..." : value;
  }

  open(content, index) {
    this.formation = this.formationData[index];
    this.modalService.open(content);
  }

  close() {
    this.formation = {};
    this.modalService.dismissAll();
  }
  closeForm() {
    this.ShowForm = false;
    this.formation = {};
  }
}
