import styled from 'styled-components'

export const Container = styled.header`
  padding: 1rem 1rem 8rem;
  background: var(--blue);
`

export const Content = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 900px;

  button {
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;

    height: 3rem;

    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`