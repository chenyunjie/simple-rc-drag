import Drag from '../src/index'

function App() {

  return (
    <div className="App">
      <div id="box" style={{ width: 500, height: 500, background: '#f7f7f7', position: 'relative'}}>
        <Drag
          onChange={(v) => {
            console.log('位置变更了:', v)
          }}
          container="box"
          width={100}
          height={100}
          x={30}
          y={30} />
        
        <Drag
          onChange={(v) => {
            console.log('位置变更了:', v)
          }}
          container="box"
          width={100}
          height={100}
          x={200}
          y={30} />
      </div>
    </div>
  )
}

export default App
