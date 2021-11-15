import React from "react"
import Layout from "../components/layout"
import BridgeTest from '../components/BridgeTest'
const HowItGrows = () => {
  return (
    <Layout id="main">
      <header class="how-it-grows-banner">
        <h1 class="onload">
          <i class="fas fa-seedling"></i>how it grows
        </h1>
      </header>
      <div id="bg-switch" class="how-it-grows-section-container">
        <div class="fader-container">
          <section id="fader1" class="fader-container__faders faders">
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

        <div class="fader-container">
          <section id="fader2" class="fader-container__faders faders">
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

        <div class="fader-container">
          <section id="fader3" class="fader-container__faders faders">
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
      <BridgeTest />

        {/* <!-- background switch images --> */}
        <div class="first-bg bg-fader active-bg" id="first-bg"></div>
        <div class="second-bg bg-fader" id="second-bg"></div>
        <div class="third-bg bg-fader" id="third-bg"></div>
      </div>
    </Layout>
  )
}

export default HowItGrows
