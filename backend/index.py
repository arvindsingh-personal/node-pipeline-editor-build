from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", 'https://node-pipeline-editor-buildfrontend.vercel.app'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: list
    edges: list

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    graph = {node["id"]: [] for node in nodes}

    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        if source in graph:
            graph[source].append(target)

    visited = set()
    path = set()

    def has_cycle(node):
        if node in path:
            return True

        if node in visited:
            return False

        visited.add(node)
        path.add(node)

        for neighbor in graph.get(node, []):
            if has_cycle(neighbor):
                return True

        path.remove(node)
        return False

    is_dag = not any(has_cycle(node) for node in graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }