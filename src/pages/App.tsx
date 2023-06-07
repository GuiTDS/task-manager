import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';

function App() {
  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
}, {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
}]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas}/>
      <Stopwatch />
    </div>
  );
}

export default App;
