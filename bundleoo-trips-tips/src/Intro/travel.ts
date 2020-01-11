import * as autoComplete from 'js-autocomplete/auto-complete.min.js';
export class Travel {

  autoComplete: HTMLElement;

  attached() {
    const auto = new autoComplete({
      selector: this.autoComplete,
      minChars: 2,
      source: function(term, suggest){
          term = term.toLowerCase();
          const choices = ['London', 'New York', 'Phi Phi', 'Miami', 'Jerusalem', 'Tel Aviv', 'Las Vegas'];
          const matches = [];
          choices.forEach(choice => {
            if(choice.toLowerCase().includes(term)) {
              matches.push(choice);
            }
          });

          suggest(matches.length ? matches : ['Anywhere']);
      }
  });
  }
}
