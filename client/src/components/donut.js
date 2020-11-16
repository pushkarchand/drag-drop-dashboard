import React,{useEffect} from 'react'
import { Doughnut} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        flexDirection: "row",
        alignItems: "center",
        width:"100%",
        height:"100%",
    },
    donut:{
        flexBasis:"40%",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    status:{
        flexBasis:"60%",
        height:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    statusbarContainer:{
        width: "95%",
        margin: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    legend:{
        height:15,
        width:15,
        borderRadius:"50%"
    },
    progressContainer:{
        width:"90%"
    },
    progressText:{
        display:"flex",
        justifyContent:"space-between",
        fontSize:14
    },
    progressBar:{
        fontSize:50,
        color:"#DDDDDE"
    }
}))
export default function Donut({name,data}) {
    const classes = useStyles();

    useEffect(() => {
       console.log(data);
    }, [])


    const renderRightHandSide=()=>{
        if(data){
            return data.datasets[0].data.map((item,index)=>(
            <Box className={classes.statusbarContainer}  key={`${ data.labels[index]}`}>
                    <div className={classes.legend} style={{background:data.datasets[0].backgroundColor[index]}}>

                    </div>
                    <div className={classes.progressContainer}>
                        <div className={classes.progressText}>
                            <span>{data.labels[index]}</span>
                            <span>{item}%</span>
                        </div>
                        <LinearProgress variant="determinate"  className={classes.progressBar} value={item} />
                    </div>
                   
            </Box>
            ))
        } else{
            return ""
        }
    }
    return (
        <div className={classes.container}>
                <div className={classes.header}>
                    {name}
                </div>
                <div className={classes.body}>
                    <div className={classes.donut}>
                        <Doughnut 
                                data={name,data}
                                options={{
                                    title:{
                                    display:false,
                                    text:'Average Rainfall per month',
                                    fontSize:20
                                    },
                                    legend:{
                                        display:false,
                                    
                                    },
                                    layout: {
                                        padding: {
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            bottom: 0
                                        },
                                        margin: {
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            bottom: 0
                                        }
                                    },
                                    aspectRatio:1
                                }}
                        />
                    </div>
                    <div className={classes.status}>
                        {
                        renderRightHandSide()
                        }
                    </div>
                </div>
        </div>
    )
}
