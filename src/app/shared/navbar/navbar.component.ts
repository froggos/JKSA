import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  closeResult: string = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
   
  }

  open = (content: any) => {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Cerrado con ${result}`;
    }, (reason) => {
      this.closeResult = `Descartado ${reason}`;
    });
  }
}
