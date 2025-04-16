import React, { useState } from 'react';
import { FaFileArchive, FaFileExcel, FaDatabase, FaSearch } from 'react-icons/fa';

const App = () => {
  const [zipPath, setZipPath] = useState('');
  const [status, setStatus] = useState({ zip: '', excel: '', insert: '', query: '' });
  const [nlQuery, setNlQuery] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleZipExtraction = () => {
    setStatus(prev => ({ ...prev, zip: '✅ ZIP extraction completed successfully.' }));
  };

  const handleValueExtraction = () => {
    setStatus(prev => ({ ...prev, excel: '✅ Value extraction completed successfully.' }));
  };

  const handleInsertToDatabase = () => {
    // Simulate inserting into database
    setTimeout(() => {
      setStatus(prev => ({ ...prev, insert: '✅ Data successfully inserted into the database.' }));
    }, 1000);
  };

  const handleRunQuery = () => {
    setStatus(prev => ({ ...prev, query: '✅ Query successful.' }));
    setSqlQuery('SELECT PartName FROM PartDetails WHERE NumberOfOperations > 2');
    setResults([
      ['BEAM LBL 26.25'],
      ['Floor Beam'],
      ['CROSSB.MILLG.PART C20'],
      ['FLOOR BEAM']
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 tracking-tight">NLP-Powered SQL Query Tool</h1>
        <p className="text-center text-gray-600 text-lg">Upload, Parse and Query Excel Data Intelligently</p>

        {/* Step 1: ZIP Extraction */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4 text-blue-600">
            <FaFileArchive className="text-xl" />
            <h2 className="text-2xl font-semibold">Step 1: Extract Excel Paths</h2>
          </div>
          <input
            type="text"
            value={zipPath}
            onChange={(e) => setZipPath(e.target.value)}
            placeholder="Enter path to ZIP file"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleZipExtraction}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
          >
            Run ZIP Extraction
          </button>
          {status.zip && <p className="text-green-600 mt-2">{status.zip}</p>}
        </section>

        {/* Step 2: Value Extraction */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4 text-green-600">
            <FaFileExcel className="text-xl" />
            <h2 className="text-2xl font-semibold">Step 2: Extract Values from Excel</h2>
          </div>
          <button
            onClick={handleValueExtraction}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition"
          >
            Run Value Extraction
          </button>
          {status.excel && <p className="text-green-600 mt-2">{status.excel}</p>}
        </section>

        {/* ✅ Step 3: Insert Into Database */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4 text-amber-600">
            <FaDatabase className="text-xl" />
            <h2 className="text-2xl font-semibold">Step 3: Insert Extracted Data into Database</h2>
          </div>
          <button
            onClick={handleInsertToDatabase}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-xl transition"
          >
            Insert Into Database
          </button>
          {status.insert && <p className="text-green-600 mt-2">{status.insert}</p>}
        </section>

        {/* ✅ Step 4: Run SQL Query */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4 text-purple-600">
            <FaSearch className="text-xl" />
            <h2 className="text-2xl font-semibold">Step 4: Run SQL Query (Natural Language)</h2>
          </div>
          <textarea
            value={nlQuery}
            onChange={(e) => setNlQuery(e.target.value)}
            placeholder="Type your natural language query here..."
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleRunQuery}
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition"
          >
            Run Query
          </button>
          {status.query && <p className="text-green-600 mt-2">{status.query}</p>}

          {sqlQuery && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700">Generated SQL Query:</h3>
              <pre className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm text-gray-800 mt-2 overflow-x-auto">{sqlQuery}</pre>
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700">Query Results:</h3>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm text-gray-800 mt-2 overflow-x-auto">
                <pre>{JSON.stringify(results, null, 2)}</pre>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
