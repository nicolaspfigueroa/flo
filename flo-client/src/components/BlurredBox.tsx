import styled from 'styled-components';

const BlurredBox = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  height: 60px;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.25);
  backdrop-filter: blur(8px);
  box-shadow: 0px 4px 24px 0px rgba(50, 50, 50, 0.25);
`;

export default BlurredBox;
