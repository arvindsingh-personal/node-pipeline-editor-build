import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id }) => {
  const [condition, setCondition] = useState("value === true");

  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-value` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <label className="node-field">
        Condition:
        <input
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
