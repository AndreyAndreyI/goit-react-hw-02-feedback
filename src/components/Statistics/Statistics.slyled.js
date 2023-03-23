import styled from 'styled-components';

export const BaseStyles = styled.h1`
  font-weight: 400px;
  font-size: 40px;
  text-align: center;
`;

export const Container = styled.div`
  margin: 60px;
  width: 600px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: .5px solid grey;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Name = styled.h2`
  font-size: 30px;
  margin: 0;
  margin-bottom: 30px;
`;

export const Position = styled.span`
  font-size: 25px;
  font-weight: 400;
`;

export const PositionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MassegeText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;