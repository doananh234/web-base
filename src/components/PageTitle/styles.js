import styled from 'styled-components';
import theme from '../../configs/theme';

export default styled.h1`
  font-size: 19px;
  font-weight: 500;
  color: ${theme.palette.color[0]};
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media only screen and (max-width: 767px) {
    margin: 0 10px;
    margin-bottom: 30px;
  }

  &:before {
    content: '';
    width: 5px;
    height: 40px;
    background-color: ${theme.palette.color[1]};
    display: flex;
    margin: 0 15px 0 0;
  }

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${theme.palette.color[1]};
    display: flex;
    margin-left: 15px;
  }
`;
