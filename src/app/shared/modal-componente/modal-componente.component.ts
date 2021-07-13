import { MainService } from './../../services/main.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-componente',
  templateUrl: './modal-componente.component.html',
  styleUrls: ['./modal-componente.component.scss']
})
export class ModalComponenteComponent implements OnInit {

  level: number = 1;

  constructor(
    public activeModal: NgbActiveModal,
    public mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.obtenerNivelTamannio().subscribe(level => {
      console.log(level);
      this.level = level;
    });
  }

  setLevel(): string {
    return `level-${this.level}`;
  }
}
