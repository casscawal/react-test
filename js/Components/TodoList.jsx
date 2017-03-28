import React from 'react';
import {render} from 'react-dom';
import {observer} from 'mobx-react'

@observer
class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.filter = this.filter.bind(this);
		this.addNew = this.addNew.bind(this);
	}
	addNew(e){
		if(e.key == "Enter"){
			this.props.store.todo.push(e.target.value)
			e.target.value = '';
		}
	}
	filter(e){
		this.props.store.filter = e.target.value
	}
	render(){
		const {filter, filteredTodo, todo} = this.props.store;
		const todoList = filteredTodo.map((todo,id) => (<li key={id}>{todo}</li>))
		
		return(
				<div> 
					<div> {filter} </div>
					<input className="add" onKeyPress={this.addNew} />
					<input className="filter" value={filter} onChange={this.filter} />
					<ul>{todoList}</ul>
					
				</div>
			)
	}
}

export default TodoList;