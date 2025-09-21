import {Component} from 'react'

class Child extends Component {
    constructor(props) {
        super(props);
        console.log('nested child constrcutor')
    }
    componentDidMount() {
        console.log('nested child componentDidMount')
    }
    render() {
         console.log('nested child render')
        return <div>Child Component</div>
    }
}

export default Child;