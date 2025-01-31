<Navbar className="nav-container">
    <span id="logo-nav">PocketArt</span>



    {/* <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2" class="material-symbols-outlined">
                                search
                            </InputGroup.Text>
                        </InputGroup> */}


    home.css:

    * {
        margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    body {
        margin: 0;
    padding: 0;
    font-family: "Poltawski Nowy", serif;
    box-sizing: border-box;
}

    .background-home {
        position: relative;
    min-height: 180vh;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    background-image: url("../assets/img/Weyden1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: center; */
    background-attachment: scroll;
}

    .home {
        max - width: 1600px;
    min-height: 230vh;
    padding: 1rem 3rem 2rem 3rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

    .home-text-container,
    nav,
    .footer,
    .big-button {
        position: relative;
    z-index: 3;
}

    /* discover art everyday*/

    .home-text-container {
        padding - top: 4rem;
}

    .home-text-1,
    .home-text-2 {
        text - align: end;
}

    .discover {
        font - family: "Poltawski Nowy", serif;
    font-style: italic;
    color: #ffffff;
    font-size: 10rem;
    line-height: 0.7;
}

    #art {
        font - family: Cormorant Unicase, serif;
    color: #ffffff;
    font-size: 10rem;
}

    /* footer */

    .footer-container {
        align - self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

    .about-us-img {
        width: 6rem;
    height: 100%;
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin: 0.5rem;
}

    .footer-text {
        font - family: "Poltawski Nowy", serif;
    color: #ffffff;
    font-size: 1.2rem;
    margin: 0.5rem;
}

    .footer-name {
        font - family: Cormorant Unicase, serif;
    color: #ffffff;
    font-size: 1.2rem;
}

    .footer-year {
        font - family: "Poltawski Nowy", serif;
    color: #ffffff;
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
}

    /* EXTRA LARGE SCREEN */
    @media (min-width: 1200px) and (max-width: 1399.98px) {
  .background - home {
        min - height: 170vh;
  }

    .home {
        max - width: 1400px;
    /* min-height: 170vh; */
    padding: 1rem 3rem 2rem 3rem;
    width: 100%;
    margin: 0 auto;
  }

    /* discover art everyday*/

    .discover {
        font - size: 8.5rem;
    line-height: 0.7;
  }

    #art {
        font - size: 8.5rem;
  }

    /* footer */

    .footer-container {
    }
}

    /* LARGE SCREEN */
    @media (min-width: 992px) and (max-width: 1199.98px) {
  .background - home {
        min - height: 180vh;
  }

    /* discover art everyday*/

    .discover {
        font - size: 7rem;
    line-height: 0.7;
  }

    #art {
        font - size: 7rem;
  }

    /* footer */

    .footer-container {
    }
}

    /* MEDIUM SCREEN */
    @media (min-width: 768px) and (max-width: 991.98px) {
  .background - home {
        min - height: 110vh;
  }

    .home {
        padding: 1rem 3rem 2rem 3rem;
    width: 100%;
    margin: 0 auto;
  }

    /* discover art everyday*/

    .discover {
        font - size: 5rem;
    line-height: 0.7;
  }

    #art {
        font - size: 5rem;
  }
}

    /* SMALL SCREEN */
    @media (min-width: 576px) and (max-width: 767.98px) {
  .background - home {
        min - height: 100vh;
  }

    .home {
        padding: 1rem 2rem 2rem 2rem;
    width: 100%;
    margin: 0 auto;
  }

    /* discover art everyday*/

    .home-text-container {
        padding - top: 2rem;
  }

    .discover {
        font - size: 4rem;
    line-height: 0.7;
  }

    #art {
        font - size: 4rem;
  }
}

    /* EXTRA SMALL SCREEN */
    @media (max-width: 575.98px) {
  /* .background-home {
    min-height: 100vh;
  }

  .home {
    padding: 1rem 1rem 1rem 1rem;
    width: 100%;
    max-width: 575px;
    margin: 0 auto;
  }
  .home-text-container {
    padding-top: 1rem;
  }

  .discover {
    font-size: 2.5rem;
    line-height: 0.7;
  }

  #art {
    font-size: 2.5rem;
  } */

  .background - home {
        min - height: 100vh;
  }

    .home {
        padding: 1rem 1rem 1rem 1rem;
    width: 100%;
    max-width: 575px;
    margin: 0 auto;
  }

    /* discover art everyday*/

    .home-text-container {
        padding - top: 1rem;
  }

    .discover {
        font - size: 4rem;
    line-height: 0.7;
  }

    #art {
        font - size: 4rem;
  }
}
