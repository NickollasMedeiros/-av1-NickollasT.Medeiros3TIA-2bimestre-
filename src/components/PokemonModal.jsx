/**
 * @fileoverview Componente Modal para exibição de detalhes do Pokémon
 * @author Nickollas T. Medeiros
 * @version 1.0.0
 */

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Componente Modal de Detalhes do Pokémon
 * 
 * Exibe um modal com informações básicas de um Pokémon específico.
 * Os dados são obtidos através da PokeAPI e incluem:
 * - Nome do Pokémon
 * - Imagem (sprite frontal)
 * - Peso
 * - Altura
 * - Tipos
 * 
 * @componente
 * @exemplo
 * // Como utilizar o componente
 * <Route path="/pokemon/:id" element={<Detalhes />} />
 * 
 * @retorna {JSX.Element} Modal com as informações básicas do Pokémon
 */
function Detalhes() {
  // Obtém o ID do Pokémon da URL
  const { id } = useParams();
  // Estado para armazenar os dados do Pokémon
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    /**
     * Busca os dados do Pokémon na API
     * 
     * @funcao
     * @async
     * @retorna {Promise<void>} Atualiza o estado com os dados do Pokémon
     */
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, [id]); // Atualiza quando o ID mudar

  // Exibe mensagem de carregamento enquanto busca os dados
  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name}
        title={`Sprite do Pokémon ${pokemon.name}`} 
      />
      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Tipo: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  );
}

export default Detalhes;
