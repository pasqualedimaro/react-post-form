import { useState } from 'react'
import axios from "axios"


function App() {
  //mi creo i campi dei post
  const [formPost,  setFormPost] = useState ({
    author: "",
    title: "",
    body: "",
    public: "false"
  });
}

export default App
