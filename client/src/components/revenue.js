import React,{useEffect} from 'react'
import { Line} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import './revenue.css'

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
export default function Revenue({name,data}) {
    const classes = useStyles();

    useEffect(() => {
       console.log(data);
    }, [])

    return (
        <div className={classes.container}>
                <div className={classes.header}>
                    {name}
                </div>
                <div className={classes.body}>
                        <Line  className="chartCanvas"
                                data={data}
                                options={{
                                  title:{
                                    display:false,
                                    text:'venue',
                                    fontSize:20
                                  },
                                  legend:{
                                    display:false,
                                    position:'right'
                                  },
                                  layout: {
                                      margin: {
                                        left: 20,
                                        right: 20,
                                        top: 0,
                                        bottom: 0
                                    }
                                  }
                                }}
                        />
                </div>
        </div>
    )
}
