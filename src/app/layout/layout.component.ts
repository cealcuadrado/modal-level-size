import { MainService } from './../services/main.service';
import { ModalComponenteComponent } from './../shared/modal-componente/modal-componente.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  level = 1;

  constructor(
    private modalService: NgbModal,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.obtenerNivelTamannio().subscribe(level => {
      this.level = level;
    });
  }

  setLevel(): string {
    return `level-${this.level}`;
  }

  foo(event: any): void {
    let value = parseInt(event.target.value, 10);
    this.mainService.setearNivelTamannio(value);
  }

  openModalPlantilla(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  openModalComponente(): void {
    this.modalService.open(ModalComponenteComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
}
