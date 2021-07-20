import React from "react";
import styled from "styled-components";
import Icon from "./../assets/images/NieuwPatroonKort.svg";
import Layout from "../containers/layout";


const HomeStyles = styled.div`
  .grid-top {
    position: absolute;
    display: flex;
    justify-content: flex-end;
  }

  .grid {
    position: relative;
    margin-left: 0;
    margin-right: 0;

    @media (max-width: $breakpoint-tablet) {
      overflow-x: hidden;
    }
  }
  .mainContent {
    display: flex;
    flex-direction: column;
    height: calc(75% + 3rem);
    margin-left: 10vw;

    @media (max-width: $breakpoint-tablet) {
      font-size: 80%;
      display: flex;
      flex-direction: column;
    }

    &_svg {
      bottom: 0;
      position: absolute;
      opacity: 0.07;
      height: 549px;
      top: 280px;
      right: 0px;
    }

    &__background {
      background-image: url("./../../images/Patroon3.svg");
      width: 100%;
      height: 100%;
      position: absolute;
      background-repeat: no-repeat;
      overflow: hidden;
    }

    &__header {
      font-size: 1.5rem;
      margin-top: 3rem;
      font-family: "FuturaHeavy", sans-serif;
      order: 0;
      font-weight: normal;
    }

    &__tekst {
      margin-top: 1rem;
      font-family: "FuturaHeavy", sans-serif;
    }
  }

  .kunst1 {
    &__image {
      margin-top: 6rem;
      width: 20%;
      height: auto;
      transition: transform 500ms ease;
      order: 2;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .kunst2 {
    &__image {
      margin-left: 2rem;
      margin-top: 8rem;
      width: 20%;
      height: auto;
      transition: transform 500ms ease;
      order: 3;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .nav {
    background-color: white;
  }

  .homeTransition-appear {
    opacity: 0;
  }

  .homeTransition-appear.homeTransition-appear-active {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  //MEDIAQUERIES
  @media (max-width: $breakpoint-tablet) {
    .main-nav {
      margin-left: 3vw;
    }

    .mainContent {
      height: calc(60% + 0rem);
      margin-left: 0;
      align-items: center;
      justify-content: center;
      height: auto;

      &__header {
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 2rem;
        text-align: center;
      }

      &_svg {
        left: 84px;
        top: 300px;
        object-position: 0;
      }
    }

    .kunst {
      display: flex;
      flex-direction: column;
      z-index: 2;

      @media (max-width: $breakpoint-tablet) {
        text-align: center;
      }

      &1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      &1__image {
        margin-top: 4rem;
        max-width: 100%;
        width: 75%;
        align-self: center;
      }

      &2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      &2__image {
        margin-top: 3rem;
        margin-bottom: 4rem;
        max-width: 100%;
        width: 75%;
        align-self: center;
        margin-left: 0;
      }
    }
  }
`;


export default function HomePage({ data }) {
    // eslint-disable-next-line prefer-destructuring
    // const site = (data || {}).site;
    // console.log(site.description);
    return (
      <Layout>
      <HomeStyles>
        <Icon className="mainContent_svg" />
        <div className="grid-top">
          <div className="grid">
            <div className="mainContent">
              <img
                className="mainContent_svg"
                src="./../assets/images/NieuwPatroonKort.svg"
                alt="Logo"
              />
              <h2 className="mainContent__header">"Ontwerpen is voor mij een feestje"</h2>
              <p className="mainContent__tekst">Grafisch | Ruimtelijk Ontwerp</p>
              <div className="kunst">
                <a href="/project1">
                  <img
                    src="https://i.imgur.com/tDPN7A1.jpg"
                    alt="kunst"
                    className="kunst1__image"
                  />
                </a>
                <a href="/project2">
                  <img
                    src="https://i.imgur.com/7mFE1ld.jpg"
                    alt="kunst"
                    className="kunst2__image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </HomeStyles>
      </Layout>
    );
  }