import styled from "styled-components";

export const Container = styled.div`
  margin-top: -8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    
    background: var(--shape);
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      display: block;

      line-height: 3rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`