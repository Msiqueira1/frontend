import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

/* const Title = styled.h2``; */



function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.fullname > b.fullname ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <AuthProvider>
        <RoutesApp />
        <Container>
          {/* <Title>USUÁRIOS</Title> */}
          {/* <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} /> */}
          {/* <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} /> */}
        </Container>
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER_LEFT} />
        <GlobalStyle />
      </AuthProvider>
    </>
  );
}

export default App;


/* import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth"; */

/* const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
}; */

/* export default App;*/