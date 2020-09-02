import {DefaultCrudRepository} from '@loopback/repository';
import {Pokemon, PokemonRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PokemonRepository extends DefaultCrudRepository<
  Pokemon,
  typeof Pokemon.prototype.name,
  PokemonRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Pokemon, dataSource);
  }
}
