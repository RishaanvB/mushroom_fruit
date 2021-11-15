import React from "react"
import Layout from "../components/layout"
const Gallery = () => {
  return (
    <Layout class="gallery-main" id="main">
      <header class="gallery-banner">
        <h1 class="onload">
          <i class="bi bi-camera"></i>gallery
        </h1>
      </header>

      <div class="gallery-container">
        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image1.jpg"
            alt="picture1"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto 1
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image2.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: fot 2
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image3.jpg"
            alt="picture3"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto3
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image4.jpg"
            alt="picture1"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto4
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure class="gallery-container__img-container">
          <img
            class="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption class="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>
      </div>
      {/* <!-- =========================MODAL=================== --> */}
      <div class="modal-background" id="modal-background">
        <i class="fas fa-chevron-left modal-background-arrow"></i>
        <i class="fas fa-times" id="close-modal"></i>

        <figure class="modal-content">
          <div class="modal-content__img-container">
            <img src="" alt="" id="modal-img" />
          </div>

          <figcaption
            class="modal-content__figcaption"
            id="modal-content__figcaption"
          >
            Beschrijving foto: Dit is een rode paddestoel met witte stippen
          </figcaption>
        </figure>

        <i class="fas fa-chevron-right modal-background-arrow"></i>
      </div>
    </Layout>
  )
}

export default Gallery
