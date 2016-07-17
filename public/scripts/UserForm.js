
var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name____"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

class InputField extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
	  return ( 
	  <div>
	    {this.props.name}:<input type="text" name={this.props.name} value={this.props.value} onChange={this.props.handleChange.bind(this)} />
	  </div>
	  );
	}
}

class UserForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {username : "John"};
		this.handleChange = this.handleChange.bind(this);
	}
	
	render() {
      return (
	    <form onSubmit={this.handleSubmit}>
	      <InputField name="username" value={this.state.username} handleChange={this.handleChange}/>
		  <input type="submit" value="Save" />
	    </form>
	  );
   }
   
   handleChange(event){
      console.debug(event.target.name + "::" + event.target.value);
	  this.setState({[event.target.name] : event.target.value});
	  console.debug("username:"+ this.state.username);
   }
   
   handleSubmit(){
     
   }
}

class App extends React.Component{
	render() {
    return <UserForm name="John"/>;
  }
}

ReactDOM.render(<App />, document.getElementById('content'));