import React from 'react';
import styled from 'styled-components';

//Styling
const LogoImg = styled.img`
  width: 150px;
  margin: auto;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// ----------------------------------------------------------------

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoImg src={process.env.PUBLIC_URL + '/images/logo-white.png'} />
    </HeaderWrapper>
  );
};
