import React from "react"
import Layout from "../components/layout"

const Faq = () => {
  return (
    <Layout class="faq-main-section" id="main">
      <header class="faq-banner">
        <h1 class="onload">
          <i class="far fa-comment comment-small"></i> frequently asked
          questions
          <i class="far fa-comment"></i>
        </h1>
      </header>

      <div class="faq-container">
        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>Will the mushroom grow out of the growing bag by itself ?</h3>
          <p class="faq-answer">
            Although it might take up to a month, the Reishi mushroom will in
            99% of cases grow out of the bag by itself.
            <span class="faq-answer__bold">
              So there is really no need to open up the bag! In fact, opening up
              the bag would harm the Reishi mushroom
            </span>
            as it would allow competing fungal species to enter the substrate
            bag.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>
            Can I reuse the plastic dome and the plastic saucer of the Reishi
            Growkit ?
          </h3>
          <p class="faq-answer">
            <span class="faq-answer__bold">Yes, you definitely can,</span>
            and I encourage you to do so! All you need to do is order a new
            Reishi growbag and place it in the Reishi Growkit as soon as the
            Reishi fruiting body is coming out at the top of the Reishi growbag.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>What is in the filter bag ?</h3>
          <p class="faq-answer">
            Inside the filter bag, mushroom substrate can be found which
            contains
            <span class="faq-answer__bold">
              oak sawdust, natural gypsum, wheat grains and water
            </span>
            . The white material is mycelium from the Reishi mushroom, which is
            “colonizing” or “engulfing” the oak sawdust.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>
            The substrate filter bag looks like it has shrunk, is this normal ?
          </h3>
          <p class="faq-answer">
            During colonization of the oak sawdust, the Reishi mycelium starts
            to eat the cellulose and ligno-cellulose that sits inside the oak
            sawdust. During this process, the substrate bag will shrink,
            <span class="faq-answer__bold">which is completely normal</span>.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>
            I see brown liquid or brown coloration on top of the mushroom
            substrate, is this normal ?
          </h3>
          <p class="faq-answer">
            The Reishi mycelium is known to produce all sorts of colors, from
            white, yellow, orange, red to brown. All of these colorations
            represent different phases of the Reishi mycelium growth and
            <span class="faq-answer__bold">
              can be considered completely normal
            </span>
            .
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>
            Can I grow other species of mushroom using the Reishi Growkit’s
            plastic dome ?
          </h3>
          <p class="faq-answer">
            As the Reishi Growkit’s microclimate is designed to exactly match
            the needs of a growing Reishi mushroom,
            <span class="faq-answer__bold">
              other species of mushroom will not likely grow well under the
              plastic dome.
            </span>
            Therefore my advice would be to not even try this.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>
            There is green coloration on the substrate or on the mushroom
            itself, especially at the tips of the mushroom. What does this mean
            ?
          </h3>
          <p class="faq-answer">
            This is very likely either Trichoderma (parasitic fungus) or a green
            Aspergillus species. Green coloration indicates that the Reishi
            mushroom is under attack by another fungus and is no longer healthy.
            <span class="faq-answer__bold">
              It is advised to throw away the Reishi substrate bag and not
              consume the fruiting body
            </span>
            as the green fungal species has potentially grown through the Reishi
            mushroom.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>When is the best time to harvest ?</h3>
          <p class="faq-answer">
            Harvesting of the fruiting body can be done while the fruiting body
            is growing. It will grow back at the site where the mushroom was
            cut, so by doing this one can harvest the fruiting body multiple
            times.
            <span class="faq-answer__bold">
              Typically after 4 months of mushroom fruiting body growth,
            </span>
            the vitality and grow speed are reduced and the fruiting body can
            become overgrown by green or white fluffy fungi. It is therefore
            advised to harvest the mushroom fruiting body before this happens.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>
            There is green coloration on the substrate or on the mushroom
            itself, especially at the tips of the mushroom. What does this mean
            ?
          </h3>
          <p class="faq-answer">
            This is very likely either Trichoderma (parasitic fungus) or a green
            Aspergillus species. Green coloration indicates that the Reishi
            mushroom is under attack by another fungus and is no longer healthy.
            <span class="faq-answer__bold">
              It is advised to throw away the Reishi substrate bag and not
              consume the fruiting body
            </span>
            as the green fungal species has potentially grown through the Reishi
            mushroom.
          </p>
        </section>

        <section class="faq-container__aq-block">
          <i class="faq-container__chevron fas fa-chevron-down"></i>
          <h3>
            Why is the “go to shop” button linked to an external webshop ?
          </h3>
          <p class="faq-answer">
            <span class="faq-answer__bold">
              There is a collaboration between me and Pip Gilmore from
              Groenetakken.nl,
            </span>
            in which I produce the Reishi Growkits and she sells them via her
            webshop.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Faq
