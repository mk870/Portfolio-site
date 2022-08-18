import styled from 'styled-components'

export const ContactFormStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  min-height:98vh;
  background:white;
  width:100%;
  padding-bottom:40px;
  .head{
    font-size:29px;
    font-weight:bold;
  }
  form{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    .data{
     display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:row;
    width:100%;
     label{
      font-weight:bold;
      font-size:18px;
      margin:10px;
    }
    .input{
      font-size:15px;
      margin-bottom:0px;
      outline: none;
      border:1px solid grey;
      width:40%;
      height:25px;
      transition: 0.1s;
      border-radius:5px;
      text-align:center;
      margin:10px;
    }
    .input:focus{
       border:2px solid #02659e;
     }
   
    }
    .text{
     display:flex;
     justify-content:center;
     align-items:center;
     flex-direction:column;
     width:100%;
     label{
      font-weight:bold;
      font-size:18px;
      margin:10px;
    }
     .area{
     width:65%;
     height:30vh;
     font-size:15px;
      margin-bottom:0px;
      outline: none;
      border:1px solid grey;
      transition: 0.1s;
      border-radius:5px;
      margin-bottom:15px;
   }
   .area:focus{
       border:2px solid #02659e;
     }
    }
    .btn{
      border-radius: 5px;
      background-color: #02659e;
      cursor: pointer;
      color: aliceblue;
      padding: 10px ;
      font-size:15px;
      font-weight:600;
      margin:10px;
      display: flex;
      align-items:center;
      justify-content:center;
      border:none;
      width:30%;
      outline: none;
      &:hover{
        background-color:#03a9fc;
      }
      
    }
  }
  @media (max-width:660px){
      form{
       .data{
        width:90%;
        .input{
          width:100%;
        }
       }
       .text{
        .area{
         width:90%;
        }
       }
      }
    }
  `