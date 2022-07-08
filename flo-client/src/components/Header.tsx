import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PlaneDeparture } from '@mountain-ui/icons';
import BlurredBox from './BlurredBox';
import { ChangeEventHandler } from 'react';

const logo =  require('../images/flologo.png');


const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  max-width: 300px;
  background-color: rgba(250, 250, 250, 0.5);
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 18px;
  font-weight: 500;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 4px;
`;
interface Props{
  onChange : ChangeEventHandler | undefined;
}

const Header: React.FC <Props>= ({ onChange }) => {
  return (
    <BlurredBox as='header'>
      <Link to='/'>
        <Image src={logo} alt={logo} />
      </Link>
      {onChange && (
        <Search>
          <PlaneDeparture fontSize={18} color='#737577' />
          <Input
            type='search'
            placeholder='Type here your destination...'
            onChange={onChange}
          />
        </Search>
      )}
    </BlurredBox>
  );
};

export default Header;
