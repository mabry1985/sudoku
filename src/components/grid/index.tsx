import React, { FC, Children } from 'react';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
  return (
    <div data-key="grid-container">
      {Children.toArray(
        [...Array(9)].map((arrayItem, rowIndex) => (
          <Row data-key="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </div>
  );
};

export default Grid;
