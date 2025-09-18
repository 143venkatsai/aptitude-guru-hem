import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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
  background: linear-gradient(to bottom, #262626, #3e3e3e, #222222);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  font-family: "Poppins", sans-serif;
`;

export const RotatingBadge = styled.img`
  width: 161px;
  height: 156px;
  animation: ${rotateX} 4s linear infinite;
  // filter: drop-shadow(0px 0px 8px white);
  margin-top: 60px;
  margin-bottom: 40px;
  // backface-visibility: hidden;
  // transform-style: preserve-3d;
  // background-color: #f5f0b2;
  // border-radius: 12px;
  // padding: 8px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #f5f0b2;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: #f5f0b2;
  font-family: "Work Sans", sans-serif;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Button = styled(motion.div)`
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  width: 179px;
  height: 48px;
  cursor: pointer;
  margin-top: 56px;
  text-align: center;
  color: #262626;
  font-family: "Poppins", sans-serif;
  background-color: #f5f0b2;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #f5f0b2;
  margin-top: 8px;
  font-family: "Work Sans", sans-serif;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
