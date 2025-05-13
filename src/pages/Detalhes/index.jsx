/**
 * @fileoverview Página de detalhes que mostra informações completas de um Pokémon específico
 * @author Nickollas T. Medeiros
 * @version 1.0.0
 */

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Componente de Detalhes do Pokémon
 * 
 * Responsável por exibir uma página com informações detalhadas de um Pokémon específico.
 * Os dados são obtidos através da PokeAPI e incluem:
 * - Nome e ID do Pokémon
 * - Imagem
 * - Tipos
 * - Experiência base
 * - Dimensões (altura e peso)
 * - Lista de habilidades
 * - Estatísticas base
 * 
 * @component
 * @exemplo
 * // Como utilizar em uma rota
 * <Route path="/detalhes/:id" element={<Detalhes />} />
 * 
 * @retorna {JSX.Element} Renderiza uma página com card contendo todos os detalhes do Pokémon
 */
function Detalhes() {
  // Extrai o ID do Pokémon dos parâmetros da URL
  const { id } = useParams();
  // Hook de navegação para voltar à página inicial
  const navigate = useNavigate();
  // Estado para gerenciar os dados do Pokémon
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    /**
     * Busca os dados do Pokémon na API
     * 
     * @funcao
     * @async
     * @retorna {Promise<void>} - Atualiza o estado com os dados do Pokémon
     */
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, [id]); // Executa quando o ID mudar

  // Tela de carregamento enquanto busca os dados
  if (!pokemon) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Carregando...</h2>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Detalhes de {pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={styles.image}
        />
        <p><strong>ID:</strong> #{pokemon.id}</p>
        <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Experiência:</strong> {pokemon.base_experience}</p>
        <p><strong>Altura:</strong> {pokemon.height / 10} metros</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Estatísticas:</strong></p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          {pokemon.stats.map(stat => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </li>
          ))}
        </ul>
        <button style={styles.button} onClick={() => navigate('/')}>
          Voltar para a Home
        </button>
      </div>
    </div>
  );
}

/**
 * Objeto de estilos do componente
 * 
 * Define todos os estilos utilizados no componente de Detalhes
 * 
 * @constante
 * @tipo {Object}
 */
const styles = {
  /**
   * Container principal
   * Centraliza o card na tela e define o fundo
   * 
   * @tipo {Object}
   */
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  /**
   * Card de informações
   * Contém todos os detalhes do Pokémon em um card com sombra
   * 
   * @tipo {Object}
   */
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  /**
   * Estilo da imagem do Pokémon
   * Define tamanho e margem da sprite do Pokémon
   * 
   * @tipo {Object}
   */
  image: {
    display: 'block',
    margin: '0 auto',
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  /**
   * Estilo do botão de retorno
   * Define aparência do botão "Voltar para Home"
   * 
   * @tipo {Object}
   */
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#ff5757',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Detalhes;
