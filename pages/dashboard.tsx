import type { NextPage } from "next";
import { useSession, getSession } from "next-auth/react";
import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import useModal from "../utils/hooks/useModal";
import { AdminRegisterModal } from "../components/modal/AdminRegisterModal";
import { UserUpdateModal } from "../components/modal/UserUpdateModal";
import { useStoreState, useStoreActions } from "../store/GlobalState";
import Loading from "../components/Loading";
import { useEffect } from "react";

const Dashboard: NextPage = (props: any) => {
  const { data: session, status, update } = useSession({ required: true });
  const setUserState = useStoreActions((state) => state.user);
  const { userName, userEmail, userRole } = useStoreState(
    (state) => state.user
  );

  let session_name, session_email, session_role;

  session_name = session?.user.name || "";
  session_role = session?.user.role || "";
  session_email = session?.user.email || "";

  userName === "" && setUserState.setName(session_name);
  userEmail === "" && setUserState.setEmail(session_email);
  userRole === "" && setUserState.setRole(session_role);

  console.log("session: ", session);

  const setAdminRegisterModal = () => {
    const modal = useModal("Neuen User anlegen", <AdminRegisterModal />);
    props.setModalContent(modal);
  };

  const setUserUpdateModal = () => {
    const modal = useModal("Benutzer- Daten ändern", <UserUpdateModal />);
    props.setModalContent(modal);
  };

  if (status === "loading" || !session) return <Loading />;

  return (
    <DashboardWrapper>
      <TitleWrapper>
        <div className="title">Dashboard von {userName}</div>
      </TitleWrapper>
      <Spacer y={2} />
      <div style={{ fontSize: "3rem" }}>Deine Daten:</div>
      <UserInformation>
        <div>Name: {userName}</div>
        <div>Email: {userEmail}</div>
        <div>Role: {userRole}</div>
      </UserInformation>
      <Spacer y={2} />
      <ButtonWrapper>
        <Button onPress={setUserUpdateModal}>Daten bearbeiten</Button>
      </ButtonWrapper>
      <Spacer y={2} />
      {userRole === "admin" && (
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
    props: {},
  };
}

export default Dashboard;
