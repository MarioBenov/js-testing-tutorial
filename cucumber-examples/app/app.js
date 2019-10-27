'use strict';

const e = React.createElement;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', isLoading: false, errorMessage: '' };

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  render() {
    return React.createElement("div", {
        id: "login"
      }, React.createElement("div", {
        className: "login-form"
      }, React.createElement("div", {
        className: "field"
      }, React.createElement("span", null, "Username"), React.createElement("input", {
        value: this.state.username,
        onChange: this.onUsernameChange
      })), React.createElement("div", {
        className: "field"
      }, React.createElement("span", null, "Password"), React.createElement("input", {
        value: this.state.password,
        onChange: this.onPasswordChange
      })), this.state.errorMessage.length ? React.createElement("div", {
        className: "error-message"
      }, this.state.errorMessage) : null, React.createElement("button", {
        onClick: this.onLogin,
        disabled: this.state.isLoading
      }, "Login")));;
  }

  onLogin() {
    this.setState({isLoading: true, errorMessage: ''})
    setTimeout(() => {
      this.setState({isLoading: false})
      if(this.state.username == 'noUser') {
        return this.setState({errorMessage: 'User does not exist'})
      }
      if(this.state.username != 'testUser' && this.state.password != 'testPassword') {
        return this.setState({errorMessage: 'Incorrect username/password'})
      }

      this.props.onLogin()
    }, 1500)
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value})
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


const domContainer = document.getElementById('appRoot');
ReactDOM.render(e(App), domContainer);
