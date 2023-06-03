import styled from "styled-components";

export const TechStackStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
  background: #02659e;
  width: 100%;
  padding-bottom: 40px;
  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: aliceblue;
    .position {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .head {
        text-align: center;
      }
      .list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        grid-gap: 10px;
        .skill {
          display: flex;
          justify-content: start;
          align-items: center;
          flex-direction: row;
          border: 1px solid aliceblue;
          border-radius: 5px;
          padding: 4px 8px;
          width: 175px;
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
  @media (max-width: 830px) {
    .skills {
      .position {
        .list {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
  }
  @media (max-width: 630px) {
    .skills {
      .position {
        .list {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .skills {
      .position {
        .list {
          grid-template-columns: 1fr 1fr;
          .skill {
            width: 140px;
          }
        }
      }
    }
  }
  @media (max-width: 360px) {
    .skills {
      .position {
        .list {
          grid-template-columns: 1fr 1fr;
          .skill {
            width: 120px;
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
export const Poster = styled.img`
  width: 40px;
  height: 29px;
`;
