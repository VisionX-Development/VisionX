import type { NextPage } from "next";
import { getSession } from "next-auth/client";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Dashboard: NextPage = (props: any) => {
  const name = props.session.user.name;
  const role = props.session.user.role;
  const email = props.session.user.email;

  return (
    <DashboardWrapper>
      <Navbar />
      <TitleWrapper>
        <div className="title">Dashboard von {name}</div>
      </TitleWrapper>
      <UserInformation>
        <div>Rolle: {role}</div>
        <div>Email: {email}</div>
      </UserInformation>
      <Footer />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: red;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  overflow: scroll;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 2rem;
  }
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
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

export default Dashboard;
