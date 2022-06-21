import  SideBar  from '../Sidebar';
import { render, screen, cleanup } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
const journeyDetails = require('./journey-details-db.json');
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";

describe('Sidebar component tests', () => {

  it('Renders correctly', () => {
    render(
      <Router>
        <SideBar journeys={[journeyDetails]}/>
      </Router>);
    const sideBarElement = screen.getByTestId('sidebar-1');
    expect(sideBarElement).toBeInTheDocument();
  })

})