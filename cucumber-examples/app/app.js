'use strict';

const e = React.createElement;

class Login extends React.Component {
  render() {
    return React.createElement("div", {
        id: "login"
      }, React.createElement("div", {
        className: "login-form"
      }, React.createElement("div", {
        className: "field"
      }, React.createElement("span", null, "Username"), React.createElement("input", null)), React.createElement("div", {
        className: "field"
      }, React.createElement("span", null, "Password"), React.createElement("input", null)), React.createElement("button", {
        onClick: () => this.props.onLogin()
      }, "Login")));
  }
}

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {title: 'Dashboard', value: 'dashboard'},
        {title: 'Projects', value: 'projects'}
      ]
    };
  }

  render() {
    return React.createElement("div", {
      className: "menu-bar"
    }, React.createElement("ul", {
      className: "menu-list"
    }, this.state.menuItems.map(item => React.createElement("li", {
      key: item.value,
      onClick: () => this.props.onViewChange(item.value)
    }, item.title))));
  }
}

class MainContent extends React.Component {
  render() {
    return React.createElement("div", {
      className: "view-content"
    }, this.renderContent());
  }

  renderContent() {
    switch(this.props.currentView) {
      case 'dashboard': return 'Dashboard Content'
      case 'projects': return 'Projects Content'
    }
  }
}

class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentView: 'dashboard' };
  }

  render() {
    return React.createElement("div", {
      id: "main"
    }, React.createElement("div", {
      className: "top-bar"
    }, React.createElement("div", {
      className: "app-name"
    }, " Test App "), React.createElement("div", {
      className: "logout-btn",
      onClick: () => this.props.onLogout()
    }, "Logout")), React.createElement("div", {
      className: "main-content"
    }, React.createElement(MenuBar, {
      onViewChange: view => this.setState({
        currentView: view
      })
    }), React.createElement(MainContent, {currentView: this.state.currentView})));
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  render() {
    if(this.state.loggedIn) {
      return e(AppMain, {onLogout: () => this.setState({loggedIn: false})})
    }

    return e(Login, {onLogin: () => this.setState({loggedIn: true})})
  }
}



// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//
//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }
//
//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

const domContainer = document.getElementById('appRoot');
ReactDOM.render(e(App), domContainer);
