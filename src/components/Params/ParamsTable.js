import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Thead = styled.thead`
  background-color: #333;
`;

const TD = styled.td`
  padding: 0.5rem;
`;

const TH = styled.th`
  padding: 0.5rem;
`;

export default function ParamsTable({ character }) {
  if (!(character in data)) {
    return <div>Character does not have any ability params</div>;
  }
  const rows = data[character].map((e) => {
    return (
      <tr key={character}>
        <TD>{e.ability}</TD>
        <TD>
          <code>{e.param}</code>
        </TD>
        <TD>{e.desc}</TD>
      </tr>
    );
  });
  return (
    <div style={{ marginTop: "1rem", width: "100%" }}>
      <Table>
        <Thead>
          <tr>
            <TH>Ability</TH>
            <TH>Param</TH>
            <TH>Description</TH>
          </tr>
        </Thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

const data = {
  albedo: [
    {
      ability: "Burst",
      param: "bloom",
      desc: "Number of burst hits. Defaults to 2",
    },
  ],
};