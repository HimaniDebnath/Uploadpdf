import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  const [pdf, setpdf] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0].name);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const endpoint = "http://127.0.0.1:8000/upload/";
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("file uploaded Successfully");
        } else {
          console.log("FIle upload unsuccessful");
        }
      } catch (error) {
        setpdf("PDF FIle");
      }
    }
    console.log("i am himani");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Upload pdf</h1>
        <input type="file" onChange={handleFileChange} />

        <button className="Secbtn" type="submit">
          Submit
        </button>
      </form>
      <textarea name="textarea" cols="30" rows="10" readOnly value={pdf}>
        {pdf}
      </textarea>
    </>
  );
}

export default App;
