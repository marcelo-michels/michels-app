import styled from 'styled-components';

export const LinkCard = styled.a`
  border: 0.3vmin solid #505050;
  border-radius: 1vmin;
  margin: 1vmin;
  padding: 2.5vmin;
  color: #f1f1f1;
  cursor: pointer;
  background-color: #2d2d35;

  .tags {
    display: flex;
    justify-content: flex-end;
    padding-top: 2vmin;
    font-size: 0.8rem;

    .tag {
      margin-left: 1vw;
      color: #5cbdbd;
    }
  }
`;
