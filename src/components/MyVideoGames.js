import React, { useEffect, useReducer } from 'react'
import { reducerGame } from '../reducers/reducerGame';

const init = () => {
  return JSON.parse(localStorage.getItem('game')) || [];
}

export const MyVideoGames = () => {
  //useReducer - Es similiar a useState, se utiliza para manejar el estado local de nuestros componentes, algunos beneficios con respecto a useState serian:
  //Nos permite manejar estados “complejos” por medio de una función reductora.
  //Un estado complejo es aquel que tiene una estructura de varios niveles, por ejemplo: un objeto de objetos que contiene arrays.
  
  const [games, dispatch] = useReducer(reducerGame, [], init)

  useEffect(() => {
    localStorage.setItem('game',JSON.stringify(games))
  }, [games])
  

  const getDataForm = e => {
    e.preventDefault();

    let game = {
      id: new Date().getTime(),
      title: e.target.title.value,
      description: e.target.description.value
    };

    console.log(game);

    const action = {
      type: 'create',
      payload: game
    };

    dispatch(action);
  };

  const deleteGame = id => {
    const action = {
      type: 'delete',
      payload: id
    };

    dispatch(action);
  };

  const editGame = (e, id) => {
    let game = {
      id,
      title: e.target.value,
      description: e.target.value
    };

    const action = {
      type: 'edit',
      payload: game
    };

    dispatch(action);
  };

  return (
    <div>
        <h1>This are my video games</h1>

        <p>Number of video games: {games.length}</p>
        <ul>
          {games?.map(game => (
            <li key={game.id}>
              {game.title} 
              &nbsp; <button onClick={e => deleteGame(game.id)}>x</button>
              &nbsp; 
              <input
                type='text' 
                onBlur={e => editGame(e, game.id)} 
                onKeyDown={e => {
                  if(e.key === 'Enter'){
                    editGame(e, game.id);
                  }
                }} 
              />
            </li>
          ))}
        </ul>

        <h3>Add games</h3>

        <form onSubmit={getDataForm}>
            <input type='text' name='title' placeholder='Title' />
            <textarea name='description' placeholder='Description' />
            <input type='submit' value='Save' />
        </form>
    </div>
  )
}
