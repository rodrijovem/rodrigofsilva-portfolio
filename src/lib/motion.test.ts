import { describe, expect, it } from 'vitest';
import { stagger } from './motion';

/*
  O `max` do stagger existe para que uma lista longa nao deixe o ultimo item
  esperando: sem o teto, o decimo item de uma lista de dez entra meio segundo
  depois do primeiro, e a entrada deixa de parecer uma coisa so.
*/
describe('stagger', () => {
  it('nao atrasa o primeiro item', () => {
    expect(stagger(0).delay).toBe(0);
  });

  it('escalona proporcionalmente enquanto esta abaixo do teto', () => {
    expect(stagger(2).delay).toBeCloseTo(0.16);
  });

  it('trava no teto em vez de crescer com o tamanho da lista', () => {
    expect(stagger(50).delay).toBe(0.32);
    expect(stagger(50).delay).toBe(stagger(500).delay);
  });

  it('preserva a transicao base', () => {
    expect(stagger(1)).toMatchObject({ type: 'spring', bounce: 0 });
  });
});
