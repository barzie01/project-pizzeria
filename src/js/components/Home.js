import {templates, select} from '../settings.js';
import {app} from '../app.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    // thisHome.initWidgets();
    thisHome.goToPage();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homeWidget(select.templateOf.homeWidget);

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.order = element.querySelector(select.home.order);
    thisHome.dom.book = element.querySelector(select.home.book);
  }

  goToPage(){
    const thisHome = this;
    
    thisHome.dom.order.addEventListener('click', function(event){
      event.preventDefault();

      app.activatePage('order');
    });

    thisHome.dom.book.addEventListener('click', function(event){
      event.preventDefault();
      app.activatePage('booking');
    });
  }
}

export default Home;

