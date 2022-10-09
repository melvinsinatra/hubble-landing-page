import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  gap: 1em;
  align-items; center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 2.5em 0;
  padding: 3.75em;
  flex-direction: ${({layout}) => layout || 'row'};

  img {
    width: 80%;
  }

  & > div {
    flex: 1
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`