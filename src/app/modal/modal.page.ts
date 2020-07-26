import { Component, OnInit, ElementRef } from "@angular/core";
import { Modal2Page } from "../modal2/modal2.page";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  constructor(
    private el: ElementRef,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  nextPage() {
    (this.el.nativeElement.closest("ion-nav") as any).push(Modal2Page);
  }

  close() {
    this.modalController.dismiss();
  }
}
