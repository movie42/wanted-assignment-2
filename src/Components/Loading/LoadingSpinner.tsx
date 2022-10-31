import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return (
    <Container>
      <span className="loading">
        <span className="loading-ball"></span>
      </span>
    </Container>
  );
};

export default LoadingSpinner;

const loadingKeyframes = keyframes`
  0%{
    rotate: 0deg
  }
  
  100%{
    rotate: 360deg ;
  }
`;

const Container = styled.div`
  .loading {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    position: fixed;
    top: 5.7rem;
    right: 1rem;
    z-index: 1000;
    width: 100%;
    height: 5rem;

    .loading-ball {
      border: 0.5rem solid transparent;
      background-image: linear-gradient(#fff, #fff),
        linear-gradient(to right, white 0%, red 100%);
      background-origin: border-box;
      background-clip: content-box, border-box;
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      animation: ${loadingKeyframes} 2s linear infinite;
    }
  }
`;
