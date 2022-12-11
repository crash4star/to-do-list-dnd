import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Bar from "./Bar";
import ToDoItem from "./ToDoItem";
import { connect } from "react-redux";
import { ActionCreator } from "../store/action";
import { getListStyle, getItemStyle, reorder } from "../DnD/DnDUtils";

const App = ({ list, updateList }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(list, result.source.index, result.destination.index);
    updateList(items);
  };

  return (
    <div className="mx-auto max-w-3xl px-2 py-10 sm:px-6 lg:px-8">
      <h3 className="mb-6 text-4xl font-bold text-[#333]">To do list</h3>
      <div className="flex mb-6">
        <Bar />
      </div>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                className="ease-in duration-100"
              >
                {list.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <ToDoItem key={item.id} item={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateList(list) {
      dispatch(ActionCreator.updateList(list));
    },
  };
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);