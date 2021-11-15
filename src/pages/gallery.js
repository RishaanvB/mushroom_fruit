import React from "react"
import Layout from "../components/layout"
const Gallery = () => {
  return (
    <Layout className="gallery-main" id="main">
      <header className="gallery-banner">
        <h1 className="onload">
          <i className="bi bi-camera"></i>gallery
        </h1>
      </header>

      <div className="gallery-container">
        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image1.jpg"
            alt="picture1"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto 1
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image2.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: fot 2
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image3.jpg"
            alt="picture3"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto3
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image4.jpg"
            alt="picture1"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto4
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>

        <figure className="gallery-container__img-container">
          <img
            className="gallery-container__img onload"
            src="../Assets/placeholder images/image5.jpg"
            alt="picture2"
          />
          <figcaption className="modal-content__figcaption">
            Beschrijving foto: foto5
          </figcaption>
        </figure>
      </div>
      {/* <!-- =========================MODAL=================== --> */}
      <div className="modal-background" id="modal-background">
        <i className="fas fa-chevron-left modal-background-arrow"></i>
        <i className="fas fa-times" id="close-modal"></i>

        <figure className="modal-content">
          <div className="modal-content__img-container">
            <img src="" alt="" id="modal-img" />
          </div>

          <figcaption
            className="modal-content__figcaption"
            id="modal-content__figcaption"
          >
            Beschrijving foto: Dit is een rode paddestoel met witte stippen
          </figcaption>
        </figure>

        <i className="fas fa-chevron-right modal-background-arrow"></i>
      </div>
    </Layout>
  )
}

export default Gallery
