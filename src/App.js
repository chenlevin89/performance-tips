import {lazy, Suspense} from 'react'
import './App.css';

const AccordionList = lazy(() => import('./features/accordion-list/AccordionList'))

function App() {
  return (
    <div className="App">

      <h1>Performance Tips</h1>

      <Suspense fallback={null}>
        <AccordionList />
      </Suspense>

    </div>
  );
}

export default App;
