import { View } from "@croquet/croquet";
import GameModel from "./GameModel";

export default class GameDisplay extends View {
  model;
  resetButton;
  countButton;

  constructor(model: GameModel) {
    super(model);
    this.model = model;
    this.resetButton = document.querySelector("#reset");
    this.countButton = document.querySelector("#count");

    this.resetButton?.addEventListener("click", () => {
      this.publish(this.model.id, "reset");
    });
    this.countButton?.addEventListener("click", () => {
      this.publish(this.model.id, "increment");
    });
  }

  update(_: number): void {
    if (this.countButton) {
      this.countButton.innerHTML = `${this.model.count}`;
    }
  }
}
