import React from "react"
import Layout from "../components/layout"
const HowItGrows = () => {
  return (
    <Layout>
      <header className="how-it-grows-banner">
        <h1 className="onload">
          <i className="fas fa-seedling"></i>how it grows
        </h1>
      </header>
      <div id="bg-switch" className="how-it-grows-section-container">
        <div className="fader-container">
          <section id="fader1" className="fader-container__faders faders">
            <h1>Titel 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, odit, iure suscipit saepe ducimus voluptatibus
              obcaecati itaque recusandae accusantium minus iste doloribus hic!
              Atque accusamus impedit animi praesentium esse at voluptates, iste
              ipsam facilis eius quam! Similique exercitationem iure, itaque,
              optio quibusdam eum ipsam corrupti repellendus, eius consequatur
              sit excepturi?
            </p>
          </section>
        </div>

        <div className="fader-container">
          <section id="fader2" className="fader-container__faders faders">
            <h1>Titel 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, odit, iure suscipit saepe ducimus voluptatibus
              obcaecati itaque recusandae accusantium minus iste doloribus hic!
              Atque accusamus impedit animi praesentium esse at voluptates, iste
              ipsam facilis eius quam! Similique exercitationem iure, itaque,
              optio quibusdam eum ipsam corrupti repellendus, eius consequatur
              sit excepturi?
            </p>
          </section>
        </div>

        <div className="fader-container">
          <section id="fader3" className="fader-container__faders faders">
            <h1>Titel 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, odit, iure suscipit saepe ducimus voluptatibus
              obcaecati itaque recusandae accusantium minus iste doloribus hic!
              Atque accusamus impedit animi praesentium esse at voluptates, iste
              ipsam facilis eius quam! Similique exercitationem iure, itaque,
              optio quibusdam eum ipsam corrupti repellendus, eius consequatur
              sit excepturi?
            </p>
          </section>
        </div>

        {/* <!-- background switch images --> */}
        <div className="first-bg bg-fader active-bg" id="first-bg"></div>
        <div className="second-bg bg-fader" id="second-bg"></div>
        <div className="third-bg bg-fader" id="third-bg"></div>
      </div>
    </Layout>
  )
}

export default HowItGrows
