import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Grid from "../../components/Grid";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
 
  return (
   <C.Container>
    <C.Title>Lista de Usuários</C.Title>
    {/* <Form /> */}
    <Grid />
    <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
      Sair
    </Button>
   </C.Container>
  );
};

export default Home;