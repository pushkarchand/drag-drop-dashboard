import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import {cardSubTypes} from '../utils/constants'

const useStyles = makeStyles((theme) => ({
        body:{
            height:75,
            padding:10,
            borderRadius:"inherit",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        icon:{
            fontSize:50,
            color:"#DDDDDE"
        },
        values:{
            display:"flex",
            flexDirection:"column",
            width: "100%",
            padding: "0 20px"
        },
        valueItem:{
            margin:0,
            padding:0,
            color:"#BEBEBE"
        }
  }));

export default function SummaryCard({name,data}) {
    const classes = useStyles();

    const getIcons=()=>{
        switch(data.subType){
            case cardSubTypes.activeUsers:{
                return <SentimentSatisfiedIcon className={classes.icon}/>
            }
            case cardSubTypes.purchases:{
                return <PersonIcon className={classes.icon}/>
            }
            case cardSubTypes.newVisits:{
                return <AttachMoneyIcon className={classes.icon}/>
            }
            case cardSubTypes.returned:{
                return <RotateRightIcon className={classes.icon}/>
            }
        }
    }
    return (
        <div className={classes.body}>
            <Box position="relative" display="inline-flex">
                <CircularProgress className={classes.icon} variant="static" value={data.percentage} />
                        <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Typography variant="caption" component="div" color="textSecondary">{data.percentage}%</Typography>
                </Box>
             </Box>
            <div className={classes.values}>
                <p className={classes.valueItem}>{name}</p>
                <p className={classes.valueItem}>{data.count}</p>
            </div>
            {getIcons()}
        </div>
    )
}
