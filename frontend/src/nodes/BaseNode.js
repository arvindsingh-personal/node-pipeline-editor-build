import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div className="node-card">
      {/* Inputs */}
      {inputs.map((input, i) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${(i + 1) * 30}px` }}
        />
      ))}

      <div className="node-title">{title}</div>

      <div className="node-body">{children}</div>

      {/* Outputs */}
      {outputs.map((output, i) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${(i + 1) * 30}px` }}
        />
      ))}
    </div>
  );
};
