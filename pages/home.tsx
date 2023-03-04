import type { NextPage } from "next";
import { getSession } from "next-auth/client";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <div className="title">Home</div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: red;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  overflow: scroll;
`;

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Home;
