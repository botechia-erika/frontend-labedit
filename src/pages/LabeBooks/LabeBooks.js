import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Heading } from '@chakra-ui/react';
const API_KEY = 'XeqDpsvAndqXB7LxbtRAc7bEhEwPP5Fc'; // Substitua com sua chave de API do Giphy

const Container = styled.div`
  text-align: center;
  padding: 20px;
  padding-top: 120px;
  background: orange;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
`;

const GifList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const GifItem = styled.div`
  margin: 10px;
  img {
    max-width: 200px;
    max-height: 200px;
  }
`;

export function LabeBooks() {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`
      );
      setGifs(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar gifs:', error);
    }
  };

  return (

    <Container>
        <Heading p={'4'} bg={'whiteAlpha.800'} mb={'20px '} borderRadius={'15px'}>      <h1>Search Giphy Emojis</h1>
        </Heading>
<Input
        type="text"
        placeholder="Digite um emoji"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button m={'auto 20px '} p={'4'} onClick={handleSearch}>Pesquisar</Button>

      <GifList>
        {gifs.map((gif) => (
          <GifItem key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </GifItem>
        ))}
      </GifList>
    </Container>
  );
}