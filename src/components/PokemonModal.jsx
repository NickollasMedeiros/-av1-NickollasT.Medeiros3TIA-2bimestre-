import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detalhes() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Tipo: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  );
}

export default Detalhes;
