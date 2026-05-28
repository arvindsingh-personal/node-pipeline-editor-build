# VectorShift Frontend Technical Assessment

## 📌 Overview

This project is a **node-based pipeline builder** built using **React (React Flow)** and **FastAPI**.

Users can create and connect different types of nodes to form a pipeline, submit it, and receive analysis about the pipeline structure from the backend.

---

## 🚀 Features

### 1. Node Abstraction

- Created a reusable **BaseNode component**
- Eliminates duplication across node types
- Enables rapid creation of new nodes

### 2. Multiple Node Types

- Input Node
- Output Node
- LLM Node
- Text Node
- API Node
- Delay Node
- Condition Node
- Logger Node
- Transform Node

---

### 3. Dynamic Text Node

- Auto-resizing text input
- Detects variables like:

  ```
  {{input}}, {{name}}
  ```

- Dynamically creates input handles for variables

---

### 4. Drag-and-Drop Pipeline Builder

- Built using React Flow
- Users can:
  - Drag nodes from toolbar
  - Connect nodes visually

---

### 5. Backend Integration (FastAPI)

- Submit pipeline to backend
- Backend returns:
  - Number of nodes
  - Number of edges
  - Whether pipeline is a DAG (Directed Acyclic Graph)

---

### 6. DAG Detection

- Implemented using DFS cycle detection
- Ensures pipeline validity

---

## 🛠️ Tech Stack

### Frontend

- React
- React Flow
- Zustand (state management)
- CSS (custom styling)

### Backend

- FastAPI
- Python

---

## 📂 Project Structure

```
frontend/
  src/
    nodes/
    ui.js
    toolbar.js
    submit.js
    store.js

backend/
  main.py
```

---

## ⚙️ Setup Instructions

### 1. Clone / Extract Project

```bash
cd project-folder
```

---

### 2. Run Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
python3 -m uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

### 3. Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔗 How to Use

1. Drag nodes from toolbar
2. Connect them on canvas
3. Add variables in Text node (e.g. `{{input}}`)
4. Click **Submit**
5. See pipeline analysis in alert

---

## 💡 Key Design Decisions

- Used **BaseNode abstraction** to reduce repetition
- Kept node logic modular and scalable
- Used **regex-based parsing** for dynamic variables
- Implemented **DFS-based DAG detection** in backend

---

## ✨ Possible Improvements

- Better UI/UX with design system
- Persist pipeline state
- Validation messages instead of alert
- Advanced node configuration

---

## 👤 Author

Arvind Singh
Frontend Developer

---

## 📌 Notes

- `node_modules` is excluded from submission
- Run `npm install` before starting frontend
