import  SideBar  from '../Sidebar';
import * as ReactDOM from 'react-dom';
const journeyDetails = require('./journey-details-db.json');

describe('Sidebar component tests', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<SideBar journeys={journeyDetails}/>, container);
  })

})