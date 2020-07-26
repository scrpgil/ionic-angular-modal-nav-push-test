import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { ModalWrapperPage } from "../modal-wrapper/modal-wrapper.page";
import { ModalPage } from "../modal/modal.page";
import { Modal2Page } from "../modal2/modal2.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  entryComponents: [ModalWrapperPage, ModalPage, Modal2Page],
  declarations: [HomePage, ModalWrapperPage, ModalPage, Modal2Page],
})
export class HomePageModule {}
