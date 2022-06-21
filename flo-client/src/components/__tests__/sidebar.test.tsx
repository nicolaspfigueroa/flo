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

  it('Should have one entry with correct name and date', () => {
    render(
      <Router>
        <SideBar journeys={[journeyDetails]}/>
      </Router>);
    const titleElement = screen.getByTestId('title-1');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('New York');
    const dateElement = screen.getByTestId('date-1');
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveTextContent('4 days');
  })


})