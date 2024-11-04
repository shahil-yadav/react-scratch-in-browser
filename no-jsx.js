"use strict";

const e = React.createElement;

class LoadWithoutJsx extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement("p", null, "Loads react ~ 11kb"),
        React.createElement("p", null, "Loads react-dom ~ 132kb"),
        React.createElement("p", null, "Total: 143 kb")
      );
    }

    return React.createElement(
      "button",
      { onClick: () => this.setState({ liked: true }),
        className: "btn btn-blue"
    },
      "Like"
    );
  }
}

const jsxDomContainer = document.querySelector("#no-jsx");
const jsxRoot = ReactDOM.createRoot(jsxDomContainer);
jsxRoot.render(e(LoadWithoutJsx));
