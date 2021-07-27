import React from "react";
import styled from "styled-components";
import Icon from "./../assets/images/NieuwPatroonKort.svg";
import Layout from "../containers/layout";

const KimStyles = styled.div`
  .fotoKim {
    margin-top: 2rem;
    order: 2;
    height: 19rem;
    width: auto;
    align-self: center;
  }

  .main-nav {
    background-color: purple;
  }

  .background {
    /* background-color: black; */
    position: relative;
    z-index: 2;
  }

/* 
  //FIRST BALLOON
  .balloon:nth-child(2) {
    &:hover {
      background-color: $color-black;
      color: $color-purple;

      &::before {
        color: $color-black;
      }

      &::after {
        background-color: $color-black;
      }
    }
  } */




  .background::before {
    content: "";
    background: url("./../../images/Patroon2.svg");
    // background-color: #DCDCDC;
    background-size: 450px;

    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.45; //https://coder-coder.com/background-image-opacity/ hier leer je hoe je de achtergrond lichter van kleur maakt
  }

  .mainContent {
    padding: 0rem 10vw;
    height: auto;
    position: relative;
    z-index: 3;
    margin: 0;

    display: flex;
    flex-direction: row;

    &__header {
      font-size: 1.5rem;
      font-family: "FuturaHeavy", sans-serif;
    }

    &__tekst {
      margin-top: 1rem;
      max-width: 90%;
      font-family: "futuraLight";
    }

    > a {
      margin-top: 4rem;
      font-weight: bold;
    }
  }

  .nav {
    background-color: $color-purple;
  }

  .tekst1 {
    margin-top: 1rem;
  }

  blockquote {
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
  blockquote p {
    display: inline;
  }

  .tekst2 {
    margin-top: 1rem;
  }

  .tekst3 {
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  .kimspiratie {
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-family: "futuraMediumbt";
  }



  @media (max-width: $breakpoint-tablet) {
    .main-nav {
      margin-left: 0;
    }

    .mainContent {
      flex-direction: column;

      &__header {
        margin-left: 0;
        text-align: left;
      }

      &__tekst {
        text-align: justify;
        max-width: 100%;
      }
    }

    .fotoKim {
      margin-bottom: 4rem;
      margin-top: 0;
    }
  }
`;

export default function KimPage({ data }) {
  // eslint-disable-next-line prefer-destructuring
  // const site = (data || {}).site;
  // console.log(site.description);
  return (
    <Layout>
      <KimStyles>
        <div className="background">
          <div className="background2">
            <div className="mainContent">
              <img src="https://i.imgur.com/NSNOLSz.jpg" alt="kunst" className="fotoKim" />
              <div>
                <h2 className="mainContent__header">IK ALS ONTWERPSTER</h2>
                <div className="mainContent__tekst">
                  <p className="tekst1">
                    Ontwerpen is voor mij net als muziek maken, een uitlaatklep, grenzen opzoeken,
                    grenzen verleggen, composities maken, jezelf laten zien of juist kwetsbaar
                    opstellen, een uitdaging, samenwerking, experimenteren, vallen en opstaan,
                    leren, lezen, ondervinden, zoeken, voelen, zien, horen, praten, luisteren,
                    maken, onderzoeken, discussiëren, vinden en concluderen.
                  </p>
                  <blockquote className="quote1">
                    “Ik zoek graag de verbinding tussen natuur en techniek en tussen mijn passies:
                    muziek en design. Vaak met het gebruik van data.”
                  </blockquote>
                  <p className="tekst2">
                    Als ontwerpster ben ik altijd bezig met het delen van mijn mening aan anderen.
                    Ik maak mijn verhaal deelbaar voor anderen. Vanaf het eerste jaar op de academie
                    wil ik anderen al overtuigen van mijn standpunt. Ik heb ondervonden dat je
                    vanuit een eigen fascinatie een standpunt in kan nemen.
                  </p>

                  <p className="tekst3">
                    Ik wil mijn fascinatie delen met anderen, mensen een stukje van mijn wereld
                    laten zien. Ik geef je met mijn speculatieve projecten/ervaringen een andere
                    kijk op het onderwerp. Ik laat een kant zien waar je nog niet eerder aan gedacht
                    had.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </KimStyles>
    </Layout>
  );
}
