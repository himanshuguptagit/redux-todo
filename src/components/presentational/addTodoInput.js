import React from "react";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';


const AddTodoInput = function(props){

  function handleAdd(event,checked){
    props.onAddClick(props.text);
  }

  function handleChange(val){
    return function(event){
      props.onTextChange(event.target.value);
    }
  }

  return(
    <div>
    <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          onChange={handleChange('multiline')}
          margin="normal"
          value={props.text}
        />
        <IconButton aria-label="Add" onClick={handleAdd}>
          <AddIcon />
        </IconButton>
    </div>
  );

}

export default AddTodoInput;
