import 'aleph1-layout/dist/main.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as fullpage from 'fullpage.js';
import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@autoinject()
export class App {

  constructor(private ea: EventAggregator) {}

  container: HTMLElement;

  attached() {
    const page = new fullpage(this.container, {
      showActiveTooltip: true,
      scrollingSpeed: 400
    });

    this.ea.subscribe('nextSlide', _ => {
      page.moveSectionDown();
    })

    this.ea.subscribe('top', _ => {
      page.silentMoveTo('firstSlide');
    })
  }
}
