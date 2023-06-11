import styled from "styled-components";
import spinner from "../src/images/spinner.svg";
import Image from "next/image";

const LoadingComponent = (): JSX.Element => {
  return (
    <LoadingWrapper>
      <ImageWrapper>
        <Image
          alt="spinner"
          src={spinner}
          layout="fill"
          priority={true}
          className="spinner"
        />
      </ImageWrapper>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-with: 100vw;
  min-height: 100vh;
`;

const ImageWrapper = styled.div`
  width: 15%;
  height: 15%;
  position: fixed;
`;

export default LoadingComponent;
