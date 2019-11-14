import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, error: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);
    this.setState({
      error
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was error with this listing. <Link to="/">Click Here</Link> to
          go back to the home page or wait five seconds{" "}
          {this.state.error.toString()}.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
