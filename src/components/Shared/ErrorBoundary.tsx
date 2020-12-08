import React from 'react';

interface ErrorBoundaryProps {
  hasError: boolean;
}
export default class ErrorBoundary extends React.Component<
{},
ErrorBoundaryProps
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    // eslint-disable-next-line no-console
    console.log({ error, info });
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-lg">Something went wrong. Please contact you administrator</div>
      );
    }
    return this.props.children;
  }
}
