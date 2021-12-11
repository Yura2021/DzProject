import React from "react";
import ChildComponent from "../component/ChildComponent";
export class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.showParent = this.showParent.bind(this);
    this.getChild = this.getChild.bind(this);
  }
  showParent() {
    alert(`Hello ${this.state.parentName}`);
  }
  getChild(child) {
    alert(`Hello ${this.state.parentName} from ${child}`);
  }
  render() {
    return (
      <div>
        <ChildComponent
          id="5"
          childMethod={this.showParent}
          childMethod2={this.getChild}
        />
      </div>
    );
  }
}
export default ParentComponent;
