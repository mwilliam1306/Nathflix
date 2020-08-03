import React from 'react';
import styled from 'styled-components';

const LoadWrapper = styled.div`
  position: fixed;
    width: 100vw;
    height: calc( 100vh + var(--bodyPaddingTop) );
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    background: var(--black);
    top: calc( var(--bodyPaddingTop) * -1);
`;

const Load = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 6px solid #362376;
  /* border-left-color: rgb(41, 40, 40); */
  border-left-color: var(--black);
  animation: load 1s linear infinite;
  z-index: 10;

  &::before{
    content:'';
  }
  @keyframes load {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  return (
    <LoadWrapper>
      <Load />
    </LoadWrapper>
  );
}
