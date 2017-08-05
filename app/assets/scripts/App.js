import MobileMenue from './modules/MobileMenue';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenue = new MobileMenue();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();

/// THIS WHERE THE BABEL AND ES6 EXAMPLES
/*
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes $0 in taxes.');
  }
}


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "red");
jane.greet();
jane.payTaxes();
*/
