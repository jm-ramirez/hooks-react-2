import React, { useEffect, useReducer } from 'react'
import { reducerGame } from '../reducers/reducerGame';

const init = () => {
  return JSON.parse(localStorage.getItem('game')) || [];
}

export const MyVideoGames = () => {
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
  };

  return (
    <div>
        <h1>This are my video games</h1>

        <p>Number of video games: 15</p>
        <ul>
            <li>Gta</li>
            <li>Fifa 22</li>
            <li>Mario Bros</li>
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
