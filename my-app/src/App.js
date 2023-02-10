import css from './App.module.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      <StatefulGreeting name="Hannah" greeting="I'm a stateful class component!" />
    </div>
  );
}

export default App;