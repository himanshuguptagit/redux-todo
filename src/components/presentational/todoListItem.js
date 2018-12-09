import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const TodoListItem = function(props){

  function handleDelete(event){
    props.onRemoveClick(props.item.id);
  }

  function handleChange(event,checked){
    props.onToggleClick(props.item.id);
  }

  return(
      <ListItem key={props.item.id}>
      <IconButton aria-label="Delete" onClick={handleDelete}><DeleteIcon/></IconButton>
         <Checkbox checked={props.item.finished} onChange={handleChange}/>
         <ListItemText primary={props.item.text} />
       </ListItem>
  );

}

export default TodoListItem;
