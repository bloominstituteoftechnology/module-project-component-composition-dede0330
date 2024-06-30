import React from "react";
import styled from "styled-components";

const styledFigure = styled.figure
max-width: 500px;

figcaption {
    font-styled: italic;
};

export default funtion Figure({ imageURL, caption }) {
    return(
    <styleFigure>
    <img src={imageURL} />
      <figcaption>Cool picture taken on {caption}</figcaption>
    </StyledFigure>
    );
    }