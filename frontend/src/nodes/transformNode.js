import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const TransformNode = ({ id }) => {
  const [operation, setOperation] = useState("Uppercase");

  return (
    <BaseNode
      title="Transform"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <label className="node-field">
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option>Uppercase</option>
          <option>Lowercase</option>
          <option>Trim</option>
          <option>JSON Parse</option>
        </select>
      </label>
    </BaseNode>
  );
};
