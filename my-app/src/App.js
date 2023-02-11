import css from './App.module.css';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';


function App() {
  return (
    <div className={css.App}>
      <StatefulGreetingWithPrevState name="Hannah" />
    </div>
  );
}

export default App;