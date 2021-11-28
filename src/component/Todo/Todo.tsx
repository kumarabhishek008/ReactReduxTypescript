import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { DeleteOutlined } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display:'flex',
      justifyContent:'center',
    },
    listItems:{
        width: '100%',
        maxWidth: 360,
    },
    input:{
        width:'20rem'
    }
  }));

interface Props{

}

const Todo:React.FC<Props> = (props) => {
    const classes = useStyles();
    const [listData, setListData] = useState<any>([]);
    const [checked, setChecked] = React.useState([0]);
    const [inputChange, setInputChange] = useState('')

    const onSubmit = (e:any) => {
        e.preventDefault();
        if(inputChange){
            setListData([
                ...listData,{
                    id : uuidv4(), 
                    text: inputChange
                }
            ])
        }
    }

    const deleteTodo = (id:string) => {
        console.log(id)   
        const index = listData.findIndex((items:any)=>items.id === id);
        listData.splice(index,1);
        setListData([...listData]);
    }

    return (
        <Grid container spacing={3}>
            <Grid item lg={12}>
                <Typography variant="h3" align="center">Todo App</Typography>
            </Grid>
            <Grid item lg={12}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <TextField id="outlined-basic" label="Enter Text" variant="outlined" className={classes.input} onChange={(e)=>setInputChange(e.target.value)} value={inputChange}/>
                    <Button variant="contained" color="secondary" style={{maxWidth:'10rem'}} type="submit">Submit</Button>
                </form>
            </Grid>
            <Grid item lg={12} container justifyContent="center">
                <List className={classes.listItems}>
                    {listData.length ? listData.map((value:any) => {
                        const labelId = `checkbox-list-label-${value.id}`;

                        return (
                        <ListItem key={value.id} role={undefined} dense button>
                            <ListItemText id={labelId} primary={value.text} />
                            <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments" onClick={()=>{deleteTodo(value.id)}}>
                                <DeleteOutlined/>
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        );
                    }):""}
                </List> 
            </Grid>
        </Grid>
    ) 
}

export default Todo
 