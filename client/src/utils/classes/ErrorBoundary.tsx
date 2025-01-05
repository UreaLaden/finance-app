import { Component, ErrorInfo } from "react";
import { ErrorBoundaryState, iErrorBoundary } from "../models";
import { ErrorBoundaryFallback } from "../../components";

class ErrorBoundary extends Component<iErrorBoundary, ErrorBoundaryState> {
  constructor(props: iErrorBoundary) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <ErrorBoundaryFallback onReset={this.resetErrorBoundary} />
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
