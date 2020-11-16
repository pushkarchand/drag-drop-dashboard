import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles((theme) => ({
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height:270
    },
    header:{
        borderBottom:"1px solid grey",
        width:"96%",
        padding:" 10px 10px",
        fontWeight:" 600",
    },
    body:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width:"100%",
        height:"100%",
    },
    feed:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        height:75
    },
    icon:{
        height:40,
        width:40,
        borderRadius:"50%",
        background:"#EEF3F6",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    comment:{
        flexBasis:"75%",
    },
    name:{
        fontWeight:600
    },
    description:{
        fontSize:14
    }
}))
export default function Feed({name,data}) {
    const classes=useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                 {name}
           </div>
           <div className={classes.body}>
               {
                   [1,2,4].map(item=>(
                    <div className={classes.feed} key={`feed-${item}`}>
                        <div className={classes.icon}>
                            <PersonIcon/>
                        </div> 
                        <div className={classes.comment}>
                                <div className={classes.name}>
                                john doe
                                </div> 
                                <div className={classes.description}>
                                    we all wellcome you to the dashboard
                                </div> 
                        </div> 
                    </div>   
                   ))
               }
                    
           </div>
        </div>
    )
}
