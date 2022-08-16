import { createRoot } from 'react-dom/client';
import { App } from './App';

// const container = document.getElementById('root')

const root = createRoot(document.getElementById('root')!);

root.render(<App />);

// render(<App />, document.getElementById('root'))