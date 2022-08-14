import styled from 'styled-components'

export const AboutMeStyles = styled.div`
  display:flex;
  //justify-content:center;
  align-items:center;
  flex-direction:column;
  min-height:95vh;
  background:#02659e;
  width:100%;
  padding-bottom:40px;
  .container{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:90%;
    margin-top:10px;
    color:aliceblue;
    .grid{
      display: grid;
        grid-template-columns: 1fr 1fr ;
        align-items: start;
        place-items:center;
      .info{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        font-size:19px;
        margin:10px 0px;
        width: 90%;
        
    }
    .images{
      display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
      img{
        height: 360px;
        width: 380px;
      }
    }
    }
    
  }
  @media (max-width:860px) {
    .container{
      .grid{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
      }
    }
  }
  @media (max-width:372px) {
    .container{
      .grid{
        .images{
          img{
            height: 300px;
            width: 320px;
          }
        }
      }
    }
  }
  `