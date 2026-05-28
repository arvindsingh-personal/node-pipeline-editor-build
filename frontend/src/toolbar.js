import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-header">
        <h2>VectorShift Pipeline Builder</h2>
        <p>Drag nodes onto the canvas and connect them.</p>
      </div>

      <div className="toolbar-nodes">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="api" label="API" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="transform" label="Transform" />
      </div>
    </div>
  );
};
