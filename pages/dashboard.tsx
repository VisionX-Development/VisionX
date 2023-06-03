import type { NextPage } from "next";
import { getSession } from "next-auth/client";
import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import useModal from "../utils/hooks/useModal";
import { AdminRegisterModal } from "../components/modal/AdminRegisterModal";
import { useStoreState, useStoreActions } from "../store/GlobalState";
import { useEffect } from "react";

const Dashboard: NextPage = (props: any) => {
  const name = props.session.user.name;
  const role = props.session.user.role;
  const email = props.session.user.email;

  const setUserState = useStoreActions((state) => state.user);

  const setAdminRegisterModal = () => {
    const modal = useModal("Neuen User anlegen", <AdminRegisterModal />);
    props.setModalContent(modal);
  };

  useEffect(() => {
    if (props.session.user !== undefined) {
      setUserState.setIsLoggedIn(true);
      setUserState.setName(props.session.user.name);
      setUserState.setRole(props.session.user.role);
      setUserState.setEmail(props.session.user.email);
    }
  }, [props.session.user]);

  return (
    <DashboardWrapper>
      <TitleWrapper>
        <div className="title">Dashboard von {name}</div>
      </TitleWrapper>
      <Spacer y={2} />
      <div style={{ fontSize: "3rem" }}>Deine Daten:</div>
      <UserInformation>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        {role === "admin" && <div>Role: {role}</div>}
      </UserInformation>
      <Spacer y={2} />
      {role === "admin" && (
        <ButtonWrapper>
          <Button onPress={setAdminRegisterModal}>Neuer User</Button>
        </ButtonWrapper>
      )}
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
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
  margin-top: 2rem;
`;

const ButtonWrapper = styled.div`
  button {
    font-size: 2rem;
    background-color: #ff0000;
    width: 50vw;
  }
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
