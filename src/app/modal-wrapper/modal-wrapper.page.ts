import { Component, OnInit } from "@angular/core";
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: "app-modal-wrapper",
  templateUrl: "./modal-wrapper.page.html",
  styleUrls: ["./modal-wrapper.page.scss"],
})
export class ModalWrapperPage implements OnInit {
  rootPage: any = ModalPage;

  constructor() {}

  ngOnInit() {}
}
