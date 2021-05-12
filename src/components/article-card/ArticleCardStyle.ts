import styled from 'styled-components';

export const LinkCard = styled.a`
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin: 1vmin;
  padding: 2.5vmin;
  color: #f1f1f1;
  cursor: pointer;

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
