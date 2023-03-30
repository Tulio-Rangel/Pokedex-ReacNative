import { POKEMON_TYPE_COLORS } from "./constants";

//const getColorByPokemonType = ([type]) => POKEMON_TYPE_COLORS[type];
const getColorByPokemonType = (types) => {
  const colors = types.map((type) => POKEMON_TYPE_COLORS[type]);
  return colors;
};

export default getColorByPokemonType;
