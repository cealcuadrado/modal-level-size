import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-componente',
  templateUrl: './modal-componente.component.html',
  styleUrls: ['./modal-componente.component.scss']
})
export class ModalComponenteComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }



}
