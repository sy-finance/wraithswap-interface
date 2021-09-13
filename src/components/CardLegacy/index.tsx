import React from 'react'
import { Box } from 'rebass/styled-components'
import styled, { keyframes } from 'styled-components'

const Card = styled(Box)<{ width?: string; padding?: string; border?: string; borderRadius?: string }>`
  width: ${({ width }) => width ?? '100%'};
  border-radius: 10px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
`

const sheen = keyframes`{
    100% {
      transform: rotateZ(60deg) translate(1em, -40em);
    }
  }`

export const DarkCard = styled(Card)`
  overflow: hidden;
  background-origin: border-box;
  position: relative;
  background: radial-gradient(circle, rgb(138 51 51) 0%, rgb(98 29 29) 100%);
  border: 2px solid #c61111;
  &:hover {
    background-origin: border-box;
    &::after {
      animation: ${sheen} 0.4s forwards;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: -80%;
    right: -20%;
    bottom: -50%;
    left: -120%;
    background: linear-gradient(
      to bottom,
      rgba(229, 172, 142, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(229, 172, 142, 0)
    );
    transform: rotateZ(70deg) translate(-5em, 7.5em);
  }
`

export const DarkBlueCard = styled(Card)`
  overflow: hidden;
  background-origin: border-box;
  position: relative;
  background-color: #12182c;
  &:hover {
    background-origin: border-box;
    &::after {
      animation: ${sheen} 0.4s forwards;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: -80%;
    right: -20%;
    bottom: -50%;
    left: -120%;
    background: linear-gradient(
      to bottom,
      rgba(229, 172, 142, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(229, 172, 142, 0)
    );
    transform: rotateZ(70deg) translate(-5em, 7.5em);
  }
`

export const LightGreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg2};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg3};
`

export const OutlineCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.bg3};
`

export const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.yellow2};
  font-weight: 500;
`

export const PinkCard = styled(Card)`
  background-color: rgba(255, 0, 122, 0.03);
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
`
