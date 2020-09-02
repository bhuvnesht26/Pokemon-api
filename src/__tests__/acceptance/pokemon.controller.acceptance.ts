import {Client, expect} from '@loopback/testlab';
import {PokemonApiApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PokemonController', () => {
  let app: PokemonApiApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /pokemon', async () => {
    const res = await client.get('/pokemon/bulbasaur').expect(200);
    expect(res.body).to.containEql({name: 'bulbasaur'});
  });

  it('invokes GET /pokemon/unknown', async () => {
    await client.get('/pokemon/unknown').expect(404);
  });
});
