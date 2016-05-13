import * as React from 'react';
import './DocumentCard.scss';
import { css } from '../../utilities/css';
import { IDocumentCardProps } from './DocumentCard.Props';

export default class DocumentCard extends React.Component<IDocumentCardProps, any> {
  public render() {
    let { onClick, onClickHref, children } = this.props;

    // If no onClickFunction was provided and we do have an onClickURL, create a function from it.
    if (!onClick && onClickHref) {
      onClick = function () {
        window.location.href = onClickHref;
      };
    }

    return (
      <div
        className={
          css(
            'ms-DocumentCard',
            {
              'ms-DocumentCard--actionable': onClick ? true : false
            }
          )
        }
        onClick={ onClick }>
        { children }
      </div>
    );
  }
}
