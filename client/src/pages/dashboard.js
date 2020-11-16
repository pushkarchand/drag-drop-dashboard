import React, { useState, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SummaryCard from '../components/summaryCard';
import Donut from '../components/donut';
import Map from '../components/map';
import Revenue from '../components/revenue';
import SuperApp from '../components/superapp';
import Feed from '../components/feed';
import {cards, cardTypes} from '../utils/constants';
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import {stateContext} from '../context';
import {setIsAuthenticated, setUserName} from '../context/action';

const useStyles = makeStyles(theme => ({
    header:{
        display:"flex",
        justifyContent:"space-between",
        padding:"10px 10px"
    },
    title:{
      fontWeight:600
    }
}))


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle,colunNumber) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  gridColumn:colunNumber+' span',
  // change background colour if dragging
  background: isDragging ? 'lightgreen' : '#fff',
  borderRadius:"4px 4px",
  boxShadow:"0 1px 6px 0 rgba(32, 33, 36, .28)",
 
  // styles we need to Dashboardly on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gridGap: "10px",
    backgroundColor: "#EEF3F6",
    padding: "10px",
    gridGap: "20px"
});

const Dashboard=()=> {
    const [items, setItems] = useState(cards);
    const classes = useStyles();
    const context = useContext(stateContext);

    const onDragEnd=(result)=> {
                // dropped outside the list
                if (!result.destination) {
                return;
                }

                const newItems = reorder(
                items,
                result.source.index,
                result.destination.index
                );
                setItems(newItems)
      }

    const renderBasedOnType=(item)=>{
          switch(item.type){
              case cardTypes.summary:{
                  return <SummaryCard name={item.name} data={item.data}/>
              }
              case cardTypes.donut:{
                  return <Donut name={item.name} data={item.data}/>
              }
              case cardTypes.map:{
                  return <Map name={item.name} data={item.data}/>
              }
              case cardTypes.area:{
                  return <Revenue name={item.name} data={item.data}/>
              }
              case cardTypes.superApp:{
                  return <SuperApp name={item.name} data={item.data}/>
              }
              case cardTypes.feed:{
                  return <Feed name={item.name} data={item.data}/>
              }
          }
    }

    const logoutUser=()=>{
      localStorage.clear();
      context.dispatch(setIsAuthenticated(false));
      context.dispatch(setUserName(''));
    }

    return (
      <React.Fragment>
              <div className={classes.header}>
                  <div className={classes.title}>
                    Dahboard
                  </div>
                  <div className={classes.action}>
                        <Tooltip title="Logout">
                          <ExitToAppIcon onClick={logoutUser}/>
                        </Tooltip>
                  </div>
              </div>
              <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable" direction="horizontal">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}
                          {...provided.droppableProps}
                        >
                          {items.map((item, index) => (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                  style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style,item.columnSize
                                  )}
                                >
                                    {renderBasedOnType(item)}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
              </DragDropContext>
      </React.Fragment>
    );
  }

export default Dashboard;