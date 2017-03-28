import { observable, computed } from 'mobx'

class TodoStore {
	@observable todo = ["buy milk","get eggs"];
	@observable filter = "";

	@computed get filteredTodo(){
		let matches = new RegExp(this.filter, "i");
		return this.todo.filter(todo => !this.filter || matches.test(todo)) 
	}
}

let store = new TodoStore

export default store
