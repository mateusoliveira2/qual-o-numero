/* eslint-disable react/jsx-key */
import { Box, Text } from "@chakra-ui/react";
import SevenSegmentDisplay from "../SegmentNumber";

const style = {
  tip: {
    fontFamily: "inherit",
    fontWeight: "bold",
    color: "#EF6C00",
    fontSize: "16px",
  },
  match: {
    fontFamily: "inherit",
    fontWeight: "bold",
    color: "#32BF00",
    fontSize: "16px",
  },
  error: {
    fontFamily: "inherit",
    fontWeight: "bold",
    color: "red",
    fontSize: "16px",
  },
  segments: {
    width: "247px",
    height: "135px",
    display: "inline",
  },
};

function Display(props) {
  const { submitInputNumber, secretNumber, match, error } = props;

  return (
    <div className="Display">
      <Box style={{ marginTop: "34px" }}>
        {submitInputNumber > secretNumber && !error && (
          <Text style={style.tip}>É menor</Text>
        )}
        {submitInputNumber !== 0 && submitInputNumber < secretNumber && (
          <Text style={style.tip}>É maior</Text>
        )}
        {match && <Text style={style.match}>Você acertou!!!</Text>}

        {error && <Text style={style.error}>ERRO</Text>}

        <Box style={style.segments}>
          {!match ? (
            !error ? (
              <SevenSegmentDisplay
                onColor={"black"}
                value={submitInputNumber}
              />
            ) : (
              <SevenSegmentDisplay onColor={"red"} value={submitInputNumber} />
            )
          ) : (
            <SevenSegmentDisplay
              onColor={"#32BF00"}
              value={submitInputNumber}
            />
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Display;
