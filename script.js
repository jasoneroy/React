var h1 = React.createElement('h1',null,'I am Neeraj Kalme')
var h2 = React.createElement('h2',null,'I am Developer')

var div = React.createElement('div',{id:'container'},[h1,h2])

var root = ReactDOM.createRoot(document.querySelector('#container'))
root.render(div)