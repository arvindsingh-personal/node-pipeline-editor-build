import { useMemo, useState } from "react";
import { BaseNode } from "./BaseNode";

const getVariablesFromText = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    variables.push(match[1]);
  }

  return [...new Set(variables)];
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const variables = useMemo(() => {
    return getVariablesFromText(currText);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
      }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <label className="node-field">
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
          rows={2}
          className="node-textarea"
        />
      </label>
    </BaseNode>
  );
};
