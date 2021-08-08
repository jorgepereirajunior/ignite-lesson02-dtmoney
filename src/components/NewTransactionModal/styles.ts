import styled from "styled-components"
import { darken } from 'polished'

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;

    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    padding: 0 1.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0%.25rem;

    width: 100%;
    height: 4rem;

    background: #E7E9EE;

    font-weight: 400;
    font-size: 1rem;

    ::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem ;
    }
  }

  button[type='submit'] {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    
    width: 100%;
    height: 4rem;

    background: var(--green);

    font-size: 1rem;
    font-weight: 600;
    color: #FFF;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  button {
    border: 1px solid #d7d7d7;
    border-radius: 0%.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;

    height: 4rem;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 1rem;

      display: inline-block;

      font-size: 1rem;
      color: var(--text-title)
    }

  }

  

  
  
`