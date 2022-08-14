import styled from 'styled-components'

export const NavbarStyles = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:row;
  color: aliceblue;
  background-color: black;
  top:0;
  z-index:10;
  width:100%;
  padding:10px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  .name{
    padding-left:10px;
    display:flex;
    justify-content:start;
    flex-direction:column;
    .name2{
      font-size:21px;
    }
  }
  .details{
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:row;
  width: 30%;
  margin:5px 25px 7px 7px;
    .linkedIn{
      a{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:7px;
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
        text-decoration:none;
        &:hover{
          cursor:pointer;
          background-color: rgba(44, 48, 61, 0.8);
          border-radius:7px;
        }
      }
    }
  }
  @media (max-width:500px) {
    .name{
    padding-left:10px;
    .name2{
      font-size:20px;
    }
  }
  }
`