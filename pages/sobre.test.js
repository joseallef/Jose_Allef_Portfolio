import React from 'react';
import { render } from '@testing-library/react';
import Sobre from './sobre';

describe('testing page sobre', () => {
  test('Sobre()', () => {
    // const res = Sobre([{repositories: { name: 'estacionamento' }}]);
    // const res = getStaticProps();
    // console.log(res);
    render(
      <Sobre
        repositories=""
      />,
    );

    expect(true).toBe(true);
  });
});
