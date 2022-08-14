import styled from 'styled-components'

export const PopupStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  max-height:120px;
  background:black;
  position: fixed;
  border:1px solid aliceblue;
  top:0;
  width:80%;
  text-align:center;
  border-radius:5px;
  color:aliceblue;
  animation: dropAnimation ease 0.6s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes dropAnimation {
      0%{
        transform:translateY(-100%);
        }
      100%{
        transform:translateY(20%);
        }
    }
    
    @media (max-width:460px){
      width: 96%;
    }
  `