import {consume} from '@layr/component';
import React from 'react';
import {view, useAsyncMemo} from '@layr/react-integration';

export const Entity = (Base) =>
  class Entity extends Base {
    @consume() static Common;

    @view() static Loader({query, attributes, children}) {
      const {Common} = this;

      const [entity, isLoading, loadingError, retryLoading] = useAsyncMemo(async () => {
        try {
          return await this.get(query, attributes);
        } catch (error) {
          error.displayMessage = `Sorry, something went wrong while loading the ${this.getComponentName().toLowerCase()} information.`;
          throw error;
        }
      }, [JSON.stringify({query, attributes})]);

      if (isLoading) {
        return <Common.LoadingSpinner />;
      }

      if (loadingError) {
        return <Common.ErrorMessage error={loadingError} onRetry={retryLoading} />;
      }

      return children(entity);
    }
  };
