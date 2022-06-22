import  Journey  from '../../pages/Journey';
import { render, screen, cleanup } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
const journeyDetails = require('./journey-details-db.json');
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import renderer from 'react-test-renderer';

describe('Journey component tests', () => {

  afterEach(cleanup);

  it('Renders correctly', () => {
    render(
      <Router>
        <Journey></Journey>
      </Router>
    );
    const sideBarElement = screen.getByTestId('journey');
    expect(sideBarElement).toBeInTheDocument();
  })

  it('Should be formatted correctly', () => {
    render(
      <Router>
        <Journey></Journey>
      </Router>
    );
    const dateElement = screen.getByTestId('journey-date');
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveTextContent('Numbers of days: 0');
  })

  it('Matches snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Journey></Journey>
      </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

})