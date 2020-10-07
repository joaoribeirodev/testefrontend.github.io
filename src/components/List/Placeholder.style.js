import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 26px;
  display: flex;
  align-items: center;
`;

export const CheckedPlaceholder = styled.div`
  width: 17px;
  height: 17px;
  background: #b7b5b5;
  margin-right: 15px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    animation: blink 0.9s linear infinite;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const PhrasePlaceholder = styled.div`
  width: 200px;
  height: 12px;
  background: #b7b5b5;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    animation: blink 1s linear infinite;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;
