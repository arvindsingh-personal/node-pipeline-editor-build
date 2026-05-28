import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LoggerNode = ({ id }) => {
  const [level, setLevel] = useState("Info");

  return (
    <BaseNode
      title="Logger"
      inputs={[{ id: `${id}-message` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <label className="node-field">
        Level:
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>Info</option>
          <option>Warning</option>
          <option>Error</option>
        </select>
      </label>
      <p className="node-description">Logs pipeline data.</p>
    </BaseNode>
  );
};
