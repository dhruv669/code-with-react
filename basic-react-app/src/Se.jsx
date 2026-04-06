
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default  function SearchBox(){
    return (
    <div className="box">
        <h2>Search for the weather</h2>
        <form> 
        <TextField id="outlined-basic" label="City Name" variant="outlined" required/>
        <br />
        <br />
         <Button variant="contained" type= "submit" >
        Search
      </Button>
      </form>
    </div>
    );
} 