const div = React.createElement('div', {id: 'parent'},[
    React.createElement('div',{id: 'child'},[
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag')
    ]),
     React.createElement('div',{id: 'child2'},[
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag')
    ])
])
const header = React.createElement("h1", {id:'header',hello:'hello',className:'new test testing'}, "hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
