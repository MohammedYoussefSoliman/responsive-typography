import React from "react";
import { styled, Paper as MaterialPaper } from "@material-ui/core";
import { Flex } from "../global/styles";
type CardPropsType = {
  typography: "responsive" | "fluid";
};

export default function Card({ typography }: CardPropsType) {
  const Paper = styled(MaterialPaper)({
    padding: "1rem",
    fontSize: typography === "responsive" ? "1.25em" : "unset",
    h1: {
      fontSize: typography === "responsive" ? "2.25em" : "unset", // 16 * 1.25 * 2.25
    },
    h2: {
      fontSize: typography === "responsive" ? "1.8em" : "unset",
    },
    p: {
      fontSize: typography === "responsive" ? "1em" : "unset",
    },
  });

  return (
    <Paper>
      <Flex gap={2} direction="column">
        <h1>this is a sample header</h1>
        <h2>this is sub header</h2>
        <p>this is a paragraph where the normal text will be.</p>
      </Flex>
    </Paper>
  );
}
