import { useState } from 'react'
import axios from "axios"
const endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"; 


function App() {
  //mi creo i campi dei post
  const [formPost,  setFormPost] = useState ({
    author: "",
    title: "",
    body: "",
    public: "false"
  });
  //funzione per i campi del form 
  function handlePost(event) {
    let value = 
    event.target.type === "checkbox"
    ? event.target.checked
    : event.target.value;
    setFormPost((formPost) =>({
      ...formPost,
      [event.target.name]: value,
    }));
  }
    //funzione per salvare
    function savePost(event){
      event.preventDefault();
      console.log("post prova", formPost );
      //chiamata axios 
      axios.post(endpoint, formPost).then((response) => {
        //stampo in console il post creato
        console.log("post pubblicato", response.data);
      });

    }
    return(
      <>
      <h1> crea nuovo post</h1>
      <form onSubmit={savePost}>
        <div>
          <label htmlFor="author-element">autore</label>
          <input type="text" 
          id="author-element"
          placeholder="nome autore"
          value={formPost.author}
          onChange={handlePost}
          name="author"
          />
        </div>
        <div>
          <label htmlFor="title-element">titolo</label>
          <input type="text" 
          id="title-element"
          placeholder="titolo del post"
          value={formPost.title}
          onChange={handlePost}
          name="title"
          />
        </div>
        <div>
          <label htmlFor="body-element">testo</label>
          <textarea 
          id="body-element"
          placeholder="contenuto"
          value={formPost.body}
          onChange={handlePost}
          name="body"
          />
        </div>
        <div>
          <label htmlFor="public-element">pubblica</label>
          <input type="checkbox" 
          id="public-element"
          checked={formPost.public}
          onChange={handlePost}
          name="public"
          />
        </div>
        <button type="submit">salva post</button>
      </form>

      </>
    )
  }


export default App
