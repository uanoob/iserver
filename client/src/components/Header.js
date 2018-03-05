import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <li>
              <a className="faicon-google-plus" href="/auth/google">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a className="faicon-github" href="/auth/github">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a className="faicon-facebook" href="/auth/facebook">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="faicon-linkedin" href="/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </div>
        );
      default:
        return (
          <div>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Inventory
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
