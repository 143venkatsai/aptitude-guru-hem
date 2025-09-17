import styled, { keyframes } from "styled-components";

export const rotateX = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

export const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, #1e1e1e, #000);
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  z-index: 9999;

  font-family: "Poppins", sans-serif;
`;

export const RotatingBadge = styled.img`
  width: 200px;
  height: 200px;
  animation: ${rotateX} 4s linear infinite;
  filter: drop-shadow(0px 0px 8px white);
  margin: 50px auto;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
  color: #ffd700;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 5px 0;
  text-align: center;
  color: #ffd700;
`;

export const Button = styled.button`
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 25px;
  transition: transform 0.2s ease-in;
  align-self: flex-start;
  color: #ffd700;
  &:hover {
    transform: scale(1.2);
  }
`;
