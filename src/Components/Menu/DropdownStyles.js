import styled from 'styled-components'

export const DropdownStyles = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  color: aliceblue;
  background-color: black;
  position:absolute;
  margin-top:9px;
  width: 100px;
  z-index:20;
  animation: moveInAnimation ease 0.6s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes moveInAnimation {
      0%{
        transform:translateX(-290%);
        }
      100%{
        transform:translateX(-69%);
        }
    }
  .details-drop{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    padding-bottom:10px;
    .linkedIn{
      a{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:7px;
        margin-top:5px;
        text-decoration:none;
        &:hover{
          cursor:pointer;
          background-color: rgba(44, 48, 61, 0.8);
          border-radius:7px;
        }
      }
    }
    .github{
      a{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:7px;
        margin-top:5px;
        text-decoration:none;
        &:hover{
          cursor:pointer;
          background-color: rgba(44, 48, 61, 0.8);
          border-radius:7px;
        }
      }
    }
    .resume{
      a{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:7px;
        margin-top:5px;
        text-decoration:none;
        &:hover{
          cursor:pointer;
          background-color: rgba(44, 48, 61, 0.8);
          border-radius:7px;
        }
      }
    }
  
  }
`