import { bindable, autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@autoinject()
export class Scroll {

  @bindable text: string;
  @bindable down: boolean;
  @bindable textColorClass: string;

  constructor(private ea: EventAggregator){}

  nextSlide() {
    this.ea.publish('nextSlide', true);
  }

  top() {
    this.ea.publish('top', true);
  }
}
