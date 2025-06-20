import { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  a = 10;
  state = {
    inc: 10,
    abc: "sri",
  };
  componentDidMount() {}
  incClick = () => {
    this.a = 100;
    this.setState({ inc: this.state.inc + 1 });
  };

  decClick = () => {
    this.setState({ ...this.state, abc: "test me" });
  };

  render() {
    return (
      <>
      <div>
        <p style={{position : "absolute",width : "100%",height: "100%",top : "0%",left :"0%",background :"rgba(0,0,0,0.5)"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsam quia explicabo reprehenderit eius itaque? Laboriosam sit eaque recusandae quibusdam reprehenderit obcaecati architecto corrupti quaerat consequatur deserunt. Ut magni voluptatibus, facilis, ad neque repudiandae tempora earum, saepe eaque illum est sed nesciunt ea vel. Consectetur a suscipit unde nam eaque?</p>
      </div>
        {/* <div>
          Testing Class COmponent {this.state.abc} - {this.state.inc} {this.a}
        </div>
        <button type="button" onClick={this.incClick}>
          Increment
        </button>
        <button type="button" onClick={this.decClick}>
          Abc Name CHange
        </button> */}
      </>
    );
  }
}

export function TestComp(props) {
  return <div>Test Comp {props.name}</div>;
}

//export default ClassComponent
