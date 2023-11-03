import { Model } from "@croquet/croquet";

export default class GameModel extends Model {
  count = 0;

  init(_: any) {
    this.future(1000).tick();
    this.subscribe(this.id, "increment", this.increment);
    this.subscribe(this.id, "reset", this.resetCounter);
  }

  increment() {
    this.count += 1;
  }

  resetCounter() {
    this.count = 0;
    this.publish(this.id, "count");
  }

  tick() {
    this.count += 1;
    this.publish(this.id, "count");
    this.future(1000).tick();
  }
}

GameModel.register("GameModel");
