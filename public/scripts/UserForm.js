
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
		this.state = {username : "", email:""};
		this.handleChange = this.handleChange.bind(this);
	}
	
	render() {
      return (
	    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
	      <InputField name="username" value={this.state.username} handleChange={this.handleChange}/>
		  <InputField name="email" value={this.state.email} handleChange={this.handleChange}/>
		  <input type="submit" value="Save" />
	    </form>
	  );
   }
   
   handleChange(event){
	  this.setState({[event.target.name] : event.target.value});
   }
   
   handleSubmit(e){
     e.preventDefault();
     this.props.handleSubmit({username: this.state.username, email: this.state.email})
     this.setState({username: "", email:""});
   }
}

class UserItem extends React.Component{
	render() {
		return (
			<tr>
			  <td>{this.props.user.username}</td>
			  <td>{this.props.user.email}</td>
			</tr>
		);
	}
}

class UserList extends React.Component{
	render() {
		return (
		  <table>
		    <thead>
		      <tr><th>Username</th><th>Email</th></tr>
		    </thead>
		    <tbody>
             {this.props.users.map(function(user){
               return <UserItem user={user} key={user.id} />;
             })}
			</tbody>
          </table>
		);
	}
}

class App extends React.Component{
	constructor(props){
	   super(props);
	   this.state = {users: []};
	}
	
	render() {
		return (
		   <div>
			 <UserForm handleSubmit={this.handleSubmit.bind(this)}/>
			 <UserList users={this.state.users} />
		   </div>
		);
  }
  
  	handleSubmit(user){
	 var users = this.state.users;
	 user.id = Date.now();
	 console.debug(JSON.stringify(user));
	 var newUsers = users.concat([user]);
     this.setState({users: newUsers});
   }
}

ReactDOM.render(<App />, document.getElementById('content'));