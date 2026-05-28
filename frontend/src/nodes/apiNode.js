import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id }) => {
  const [method, setMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("/api/data");

  return (
    <BaseNode
      title="API"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <label className="node-field">
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </label>

      <label className="node-field">
        Endpoint:
        <input value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
      </label>
    </BaseNode>
  );
};
