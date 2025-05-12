import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, [id]);

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

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
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
