import 'aleph1-layout/dist/main.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as pageable from 'pageable';

export class App {

  constructor() {}

  container: HTMLElement;

  attached() {
    const page = new pageable(this.container, {
      animation: 300
    });
  }
}
