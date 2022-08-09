import { Box, Input, Text, Divider, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Display from "./components/Display";

/**
 * A aplicação React usa principalmente controle de estados para controlar o comportamento
 * do jogo em relação à cores, fetch do número secreto e tratamento de erros.
 *
 * Para algarismo do display de segmentos, existe uma estrutura segmentMap que tem mapeado
 * todos os segmentos (de a até g), dai para cada número recebido (de 0 à 9) é pago os
 * segmentos e marcados do segmentMap e é colorida a estrutura que já estava previamente montada.
 *
 * Foi usado o Chakra como lib de componentes por ser simples de se trabalhar e ter todos
 * os componentes necessários para a aplicação.
 *
 * A estruturação de pastas foi basicamente separando os componentes, pois é uma aplicação
 * pequena. Porém caso tivessem mais complexidade, por exemplo, seria interessante criar
 * uma pastas para api, utils, imagens, etc.
 */

const style = {
  submitButton: {
    width: "78px",
    height: "42",
    color: "white",
    backgroundColor: "#EF6C00",
    fontSize: "12px",
    fontWeight: "bold",
    padding: "4px",
    marginLeft: "11px",
  },
  inputNumber: { width: "217px", height: "42px" },
  newPlay: {
    marginTop: "56px",
    marginBottom: "34px",
    width: "130px",
    height: "42",
    color: "white",
    fontSize: "12px",
    backgroundColor: "grey",
    fontWeight: "bold",
    padding: "4px",
    marginLeft: "11px",
  },
  title: {
    color: "#EF6C00",
    fontSize: "36px",
    fontFamily: "inherit",
    fontWeight: "bold",
  },
  divider: { marginBottom: "97px" },
};

function App() {
  const [secretNumber, setSecretNumber] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [submitInputNumber, setSubmitInputNumber] = useState(0);
  const [match, setMatch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!match || error) {
      fetch(
        "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .catch(() => {
          setError(true);
          setSubmitInputNumber(502);
        })
        .then((number) => {
          setSecretNumber(number.value);
        });
    }
  }, [match, error]);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Box>
        <Box style={{ display: "inline-table" }}>
          <Text style={style.title}>QUAL É O NÚMERO?</Text>
          <Divider style={style.divider} />
        </Box>
        <Box>
          <Display
            submitInputNumber={submitInputNumber}
            match={match}
            error={error}
            secretNumber={secretNumber}
          />
          {!match && !error && <Box style={{ height: "90px" }} />}
          {(match || error) && (
            <Button
              style={style.newPlay}
              onClick={() => {
                setMatch(false);
                setError(false);
                setSubmitInputNumber(0);
              }}
            >
              NOVA PARTIDA
            </Button>
          )}
        </Box>

        <Box>
          <Input
            style={style.inputNumber}
            type="number"
            placeholder="Digite o palpite"
            focusBorderColor="#EF6C00"
            borderColor
            onChange={(e) => {
              setInputNumber(e.target.value);
            }}
          />
          <Button
            style={style.submitButton}
            onClick={() => {
              setSubmitInputNumber(inputNumber);
              if (inputNumber == secretNumber) {
                setMatch(true);
              }
            }}
          >
            ENVIAR
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
