import React, {useMemo} from 'react';
import {Component} from '@layr/component';
import {view, useDelay} from '@layr/react-integration';

export class Common extends Component {
  @view() static LoadingSpinner() {
    const style = useMemo(
      () => ({
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        margin: '90px auto',
        position: 'relative',
        borderTop: '3px solid rgba(0, 0, 0, 0.1)',
        borderRight: '3px solid rgba(0, 0, 0, 0.1)',
        borderBottom: '3px solid rgba(0, 0, 0, 0.1)',
        borderLeft: '3px solid #818a91',
        transform: 'translateZ(0)',
        animation: 'loading-spinner 0.5s infinite linear'
      }),
      []
    );

    return (
      <this.Delayed>
        <div className="loading-spinner" style={style}>
          <style>
            {`
          @keyframes loading-spinner {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
          }
          `}
          </style>
        </div>
      </this.Delayed>
    );
  }

  @view() static ErrorMessage({error, onRetry}) {
    const message = error?.displayMessage || 'Sorry, something went wrong.';

    return (
      <div className="alert alert-danger" style={{marginTop: '1rem'}} role="alert">
        <div>{message}</div>
        {onRetry && (
          <>
            <hr />
            <div>
              <button onClick={onRetry} className="btn btn-outline-danger">
                Retry
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  @view() static RouteNotFound() {
    return <div>Sorry, there is nothing here.</div>;
  }

  @view() static Delayed({duration = 400, children}) {
    const [isElapsed] = useDelay(duration);

    if (isElapsed) {
      return children;
    }

    return null;
  }
}
