function App() {
  return (
    <AzureAD provider={authProvider} forceLogin={true}>
      <div className="App">
        <header className="App-header">
          <p>
            Hello, World!
          </p>
        </header>
      </div>
    </AzureAD>
  );
}

export default App;
