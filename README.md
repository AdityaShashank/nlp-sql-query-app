﻿# nlp-sql-query-app
#  NLP-Powered SQL Query Tool

An intelligent and interactive React-based frontend that allows users to upload and parse Excel files from a ZIP archive, insert extracted data into a database, and run SQL queries using natural language inputs — all through a clean and user-friendly UI.

---

##  Features

Step-by-step Workflow: From ZIP extraction to database insertion and querying.
- ZIP File Path Input: Accept path to ZIP file containing Excel documents.
- Excel Value Extraction: Parse and extract relevant values from Excel files.
- Database Insertion: Insert the parsed values into a database with one click.
- Natural Language Query: Enter a human-readable question and auto-generate SQL.
- SQL Preview and Results: See the generated SQL and corresponding data output.

---

##  Tech Stack

- Frontend: React + Tailwind CSS
- cons: React Icons (FontAwesome)
- State Management: React Hooks (`useState`)
- Backend Integration : FastAPI

---

##  Project Structure

bash
src/
├── App.jsx            # Main UI with step-by-step flow
├── index.js           # ReactDOM entry point
├── assets/            # (optional) images or icons
├── styles/            # Tailwind CSS configs (if customized)
public/
├── index.html

To clone the Repo:
git clone https://github.com/your-username/nlp-sql-query-tool.git
cd nlp-sql-query-tool

To install the dependencies:
npm install

To run the APp:
npm start 
