function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>My Todo List</h1>
          <p className="subtitle">Add your tasks</p>
        </header>
        <main>
          <form id="todo-form">
            <div className="input-group">
              <input name="todo-text" id="new-todo-input" placeholder="What needs to be done?" />
              <button type="submit" id="add-btn">
                Add
              </button>
            </div>
          </form>
          <div className="todo-container">
            <ul id="todo-list"></ul>
          </div>
        </main>
        <footer>
          <p>Click on a task to mark it as completed</p>
        </footer>
      </div>
    </>
  )
}

export default App
