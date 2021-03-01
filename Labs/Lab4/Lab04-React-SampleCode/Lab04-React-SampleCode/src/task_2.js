class App extends React.Component{
  render(){
    return(
      <div>
        <h3>Class: CS 319</h3>
        <h3>Lab activity 4</h3>
        <p>This is class component.</p>
      </div>
    )
  }
}

function App() {
  return(
    <div>
      <h3>Class: CS319</h3>
      <h3>Lab activity 4
        <p>Tihs is funciton component</p>
      </h3>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));