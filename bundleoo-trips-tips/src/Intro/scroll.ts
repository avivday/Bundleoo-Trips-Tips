import { bindable, autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@autoinject()
export class Scroll {

  @bindable text: string;
  @bindable down: boolean;

  constructor(private ea: EventAggregator){}

  nextSlide() {
    this.ea.publish('nextSlide', true);
  }

  top() {
    this.ea.publish('top', true);
  }
}
