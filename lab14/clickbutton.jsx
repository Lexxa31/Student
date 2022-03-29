class ClickButton extends React.Component {
             
           constructor(props) {
               super(props);
               this.state = {class: "off", label: "Нажми"};
                 
               this.press = this.press.bind(this);
           }
           press(){
               let className = (this.state.class==="off")?"on":"off";
               this.setState({class: className});
           }
           render() {
               return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
           }
       }

ReactDOM.render(
              <Hello name="Joni" age="13" />,
              document.getElementById("app")
          )
