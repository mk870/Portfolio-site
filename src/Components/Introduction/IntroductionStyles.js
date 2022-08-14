import styled from 'styled-components'

export const IntroductionStyles = styled.div`
  display:flex;
  align-items:start;
  flex-direction:column;
  min-height:68vh;
  margin-left:20vw;
  width: 100%;
  
  .intro{
    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    .greeting{
      display:flex;
      justify-content:center;
      flex-direction:column;
      margin-top:10px;
      
      .descr{
        font-size:40px;
        font-weight:bold;
        .name-span{
          color:#02659e;
        }
      }
      
    }
    .info{
        display:flex;
        align-items:start;
        flex-direction:row;
        width:100%;
        margin-bottom:30px;
        span{
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:20px;
          font-weight:bold;
          color:#02659e;
          border: 2px solid #02659e;
          border-radius:5px;
          padding:10px;
          width: 80px;
          margin-left:2px;
          margin-top:30px;
          &:hover{
            cursor:pointer;
            color:white;
            background: #02659e;
            
          }
        }
        
      }
  }
  @media (max-width:630px) {
    margin-left:auto;
    align-items:center;

  }
  @media (max-width:550px) {
    text-align:center;
    .intro{
      .info{
        align-items:center;
        justify-content:center;
        span{
          font-size:17px;
          width:60px;
        }
      }
    }
  }
  @media (max-width:360px) {
    text-align:center;
    .intro{
      .info{
        align-items:center;
        justify-content:center;
        span{
          font-size:17px;
          width:53px;
        }
      }
    }
  }
  `