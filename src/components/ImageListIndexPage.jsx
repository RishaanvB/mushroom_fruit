import React from "react"
import styled from "styled-components"

export default function ImageListIndexPage() {
  const ImageList = styled.div`
    width: 100%;
    margin-top: 6rem;
    margin-bottom: 4rem;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    grid-column-gap: 1rem;
  `
  const ImageListItem = styled.div``

  return (
    <ImageList>
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=228&h=228&fit=crop&auto=format`}
            srcSet={`${item.img}?w=228&h=228&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
]
