import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id }) => {
  const [delay, setDelay] = useState(5);

  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <label className="node-field">
        Delay:
        <input
          type="number"
          min="1"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
      </label>
      <p className="node-description">Waits before continuing.</p>
    </BaseNode>
  );
};
