class component{
    constructor(children = []){
        this.children = children;
    }
    render(){
        throw new Error('Child class must implement render() method.');
    }
    renderInnerHTML(){
        return this.children 
            .map((child) =>{
                if (typeof child === 'string'){
                    return child;
                } else (typeof child !== 'string');{
                    return child.render();
                }

            })
        }
    }

    module.exports = Component;
