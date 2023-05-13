const Component = require('./component.js')
class TaskListItem extends Component{
    constructor(children, priority = false){
        super(children);
        this.priority = priority;
    }
    let
    render(){
        let classNames = 'task-item';
        if(this.priority){
            classNames += ' task-item-priority';
        }
        return `<li class="tasks-item">${this.renderInnerHTML()}</li>`;
    }
    
}
module.exports = TaskListItem;