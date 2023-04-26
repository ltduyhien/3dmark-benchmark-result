import logo from './logo.svg';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div class="container">
          <div class="flex-grid ">
            <div class="flex-column col-6 card">
              <div id="main-score-chart"></div>
            </div>
            <div class="flex-column col-3 card">25% width column</div>
            <div class="flex-column col-3 card">25% width column</div>
          </div>
          <div class="flex-grid">
            <div class="flex-column col-12">100% width column</div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
