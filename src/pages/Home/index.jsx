import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pokeg from './pokeg.png'; // Certifique-se de que o nome está correto e a imagem está na mesma pasta

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
      const data = await res.json();
      setPokemons(data.results);
    }

    fetchPokemons();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {/* Título e imagem lado a lado */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{ marginRight: '20px' }}>Lista de Pokémons</h1>
        <img src={pokeg} alt="Logo Pokémon"
          style={{ width: '120px', height: '120px' }}
        />
      </div>

      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.name} style={{ marginBottom: '10px' }}>
            <Link to={`/detalhes/${pokemon.name}`}>
              <button style={{ cursor: 'pointer', padding: '10px 20px' }}>
                {index + 1}. {pokemon.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
