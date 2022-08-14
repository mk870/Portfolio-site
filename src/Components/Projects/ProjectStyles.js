import styled from 'styled-components'

export const ProjectStyles = styled.div`
  
  .project{
    display:flex;
    align-items:center;
    flex-direction:column;
    border:1px solid aliceblue;
    border-radius:12px;
    margin-bottom:15px;
    background:#141414;
    .name{
      font-size:20px;
      font-weight:bold;
      margin:10px 5px 5px 5px;
      text-align:center;
      
    }
      .wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        align-items: start;
        place-items:center;
        padding-top:15px;
        justify-content:center;
        .image{
          height: 100%;
          margin:10px ;
          .moviepic{
            height:600px;
            width:400px;
            border-radius:10px;
            border:2px solid aliceblue;
            
          }
          .photopic{
            height:490px;
            width:490px;
            border-radius:10px;
            border:2px solid aliceblue;
          }
          .mappic{
            height:500px;
            width:500px;
            border-radius:10px;
            border:2px solid aliceblue;
          }
          .eplpic{
            height:300px;
            width:500px;
            border-radius:10px;
            border:2px solid aliceblue;
            margin-right:50px;
          }
        }
        .info{
          display:flex;
          align-items:center;
          flex-direction:column;
          margin:10px 10px 10px 60px;
          height: 100%;
          .description{
            //text-align:center;
            width:500px;
            span{
              color:#02659e;
              font-weight:bold;
              a{
                color:#02659e;
                font-weight:bold;
                text-decoration:underline;
              }
            }
            .sub-head{
              font-size:16px;
              margin-bottom:2px;
              font-weight:bold;
            }
          }
          .language{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            margin:3px 10px 10px 10px;
            p{
              font-size:16px;
              margin-bottom:8px;
              font-weight:bold;
              color:#02659e;
            }
            .lang-list{
              display: grid;
              grid-template-columns: 1fr 1fr 1fr ;
              justify-content: center;
              align-items: center;
              font-size:13px;
              grid-gap:10px;
              .lang-id{
                display:flex;
                justify-content:start;
                align-items:center;
                flex-direction:row;
                border: 1px solid aliceblue;
                border-radius:5px;
                padding: 4px 8px;
                span{
                  margin-left:3px;
                }
              }
            }
          }
        
            .links{
                display:flex;
                justify-content:space-around;
                
                flex-direction:row;
                width: 100%;
                a{
                display:flex;
                justify-content:space-between;
                align-items:center;
                flex-direction:row;
                border: 1px solid aliceblue;
                border-radius:5px;
                box-shadow:inset 0 0 0 0 black;
                transition: ease-out 0.3s;
                padding:8px;
                width:120px;
                margin:2px;
                .btn{
                  display:flex;
                  justify-content:space-between;
                  align-items:center;
                  flex-direction:row;
                }
                span{
                  margin-left:3px;
                }
                &:hover{
                  cursor:pointer;
                  box-shadow:inset 136px 0 0 0 aliceblue;
                  color:black;
                }
              }
            }
          
          .techstack{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            p{
              font-size:16px;
              margin-bottom:5px;
              font-weight:bold;
              color:#02659e;
            }
            .tech-list{
              display: grid;
              grid-template-columns: 1fr 1fr 1fr ;
              justify-content: center;
              align-items: center;
              grid-gap:10px;
              font-size:13px;
              .tech-id{
                display:flex;
                justify-content:start;
                align-items:center;
                flex-direction:row;
                border: 1px solid aliceblue;
                border-radius:5px;
                padding:4px 8px;
                span{
                  margin-left:5px;
                }
              }
            }
            
          }
          
        }
    }
    }
    
    @media (max-width:1160px) {
      .project{
        width: 70vw;
        .wrapper{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column-reverse;
          .image{
            .moviepic{
              height:480px;
              width:450px;
              
            }
            .photopic{
              height:480px;
              width:480px;
              
            }
            .mappic{
              height:480px;
              width:480px;
            }
            .eplpic{
              height:300px;
              width:480px;
              margin-right:auto;
            }
          }
          .info{
            margin:10px;
            .techstack{
              .tech-list{
                
              }
            }
          }
        }
      }
    }
    @media (max-width:800px) {
      .project{
        .wrapper{
          
          .image{
            .moviepic{
              height:400px;
              width:380px;
              
            }
            .photopic{
              height:380px;
              width:380px;
              
            }
            .mappic{
              height:380px;
              width:380px;
            }
            .eplpic{
              height:200px;
              width:380px;
            }
          }
        .info{
          .description{
            width:auto;
            padding:7px;
          }
          .techstack{
            .tech-list{
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          .language{
            .lang-list{
              grid-template-columns: 1fr 1fr;
            }
          }
        }
        }
      }
    }
    @media (max-width:550px) {
      .project{
        width: 93vw;
        .wrapper{
          
          
        .info{
          .techstack{
            .tech-list{
              grid-template-columns: 1fr 1fr ;
            }
          }
        }
        }
      }
    }
    @media (max-width:400px) {
      .project{
        width: 93vw;
        .wrapper{
          
          .image{
            .eplpic{
              height:200px;
              width:250px;
            }
            .mappic{
              height:280px;
              width:280px;
            }
            .photopic{
              height:280px;
              width:280px;
              
            }
            .moviepic{
              height:350px;
              width:280px;
              
            }
          }
        .info{
          .techstack{
            .tech-list{
              grid-template-columns: 1fr 1fr ;
            }
          }
        }
        }
      }
    }
  `