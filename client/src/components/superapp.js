import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height:270
    },
    body:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width:"100%",
        height:"135px",
        borderBottom:"1px solid #c2c2c2"
    },
    outer:{
        width:90,
        height:90,
        borderRadius:"50%",
        background:"#a7a2a2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border:"1px solide #c2c2c2"
    },
    mid:{
        width:75,
        height:75,
        borderRadius:"50%",
        background:"#00A476",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    inner:{
        width:52,
        height:52,
        borderRadius:"50%",
        background:"white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    innermost:{
        width:45,
        height:45,
        borderRadius:"50%",
        background:"#35C5A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    name:{
        fontSize:"28px",
        fontWeight:600
    },
    popular:{
        display:"flex",
        fontSize:20,
        justifyContent:"space-around",
        width:"100%",
        padding:"10px 0",
        borderBottom:"1px solid #c2c2c2"
    },
    stats:{
        display:"flex",
        justifyContent:"space-around",
        width:"100%",
        padding:"10px 0"
    },
    statsItem:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
}))
export default function SuperApp({name,data}) {
    const classes=useStyles();
    return (
        <div className={classes.container}>
           <div className={classes.body}>
                    <div className={classes.outer}>
                        <div className={classes.mid}>
                            <div className={classes.inner}>
                                <div className={classes.innermost}>
                                    <FavoriteIcon style={{fontSize:35,color:"#fff"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.name}>
                        Super App
                    </div>
           </div>
           <div className={classes.popular}>
               <div>Most Popular App</div>
               <div>175$</div>
           </div>
           <div className={classes.stats}>
               <div className={classes.statsItem}>
                   <div>Total Value</div> 
                   <div>42512</div> 
                </div>
                <div className={classes.statsItem}>
                   <div>New Value</div> 
                   <div>8313</div> 
                </div>
                <div className={classes.statsItem}>
                   <div>Sales</div> 
                   <div>3838</div> 
                </div>
           </div>
        </div>
    )
}