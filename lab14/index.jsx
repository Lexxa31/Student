class ClickButton extends React.Component {
             
           constructor(props) {
               super(props);
               this.state = {class: "off", label: "Нажми"};
                 
               this.press = this.press.bind(this);
           }
           press(){
               let className = (this.state.class==="off")?"on":"off";
               this.setState({class: className, label: "Отожми"});
           }
           render() {
               return <div>
            <p>Имя: {this.props.name}</p>
            <p>Возраст: {this.props.age}</p>
			<button onClick={this.press} className={this.state.class}>{this.state.label}</button></div>;
           }
       }
	   

ReactDOM.render(
			  <ClickButton name="Joni" age="23"/>,
              document.getElementById("app")
          )