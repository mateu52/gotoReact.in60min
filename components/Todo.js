import React from 'react'
import TodoItem from './TodoItem'
class Todo extends React.Component{
    state ={
        elements: [
            { id: '34324234' ,isComplited:true, title: 'Zrobic zakupy'},
            { id: '42523433' ,isComplited:false, title: 'Oplac domene'}
        ]
    }

    markCompleted(id){
        const index = this.state.elements
                        .findIndex(x=>x==id)
        const newElements = this.state.elements
        newElements[index].isComplited =true

        this.setState({elements:newElements})
    }

    render(){
        const elements = this.state.elements.map(e=>{
            return <TodoItem element={e} markClicked={this.markCompleted.bind(this)} />
        }
            )
        return (
            <div>
                Todo app
                {elements}
            </div>
        )
    }
}

export default Todo