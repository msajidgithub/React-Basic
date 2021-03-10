import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ContactSupportOutlined } from '@material-ui/icons';

function SearchPic() {
    const [querry, setQuerry] = useState("");
    const [pics, setPics] = useState([]);
    const app_id= "UuX64rzBFOh9j8vv68BCNHK7IZ1z62QmiaGWn-MNZaI";
   useEffect(() => {
     searchPhotos()
   }, [querry])
    
    const searchPhotos =  () => {
        console.log("Submitting the Form")
   
        axios.get(`https://api.unsplash.com/search/photos/?client_id=${app_id}&query=${querry}`)
        .then(res => { 
          console.log(res.data)
          setPics(res.data.results)    
        } )
       
        };

    return (
        <div>
      <form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="querry"> 
          {" "}
          📷
        </label>
        <input
          type="search"
          name="querry"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={querry}
          onChange={(e) => setQuerry(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
{
          pics.map((pic) =>{
          return( 
          <div className="card" key={pic.id}>
               <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="100%"
                height="100%"
              />
          </div>) 
        } )
        
    }
      </div>
        </div>
    )
}

export default SearchPic
