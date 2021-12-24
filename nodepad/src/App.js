import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Tree from './components/Tree'
import Welcome from './components/Welcome'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      idCounter: 0,
      nodeChildren: [],
      nodeValues: [],
      childrenShowing: [],
      currentVal: "",
      currentIdx: 0
    }
  }

  remove(id) {
    const newTree = this.state.nodeValues.map(_id => {
      return _id !== id
    })
    const newnodeValues = [...this.state.nodeValues]
    newnodeValues[id] = null
    this.setState(prevState => ({
      ...prevState, 
      tree: newTree, 
      nodeValues: newnodeValues
    }))
  }
  
  edit(value) {
    console.log('EDIT func. val: '+value)
    this.setState({currentVal: value })
  }

  update(nodeValsChildIndex) {
    console.log("UPDATE. child index ", nodeValsChildIndex)
    console.log(`UPDATE. new value ${this.state.currentVal}`)

    const newnodeValues = [...this.state.nodeValues]
    newnodeValues[nodeValsChildIndex] = this.state.currentVal
    console.log('NEW node vals: ', newnodeValues)

    this.setState(prevState => ({ ...prevState, nodeValues: newnodeValues, currentVal: null }))
  }

  addNode(val, nodeIndex, event) {    
    if (event) event.preventDefault() // form submitted, stop page reload
    if ((val === "" || val === undefined) && event) return event.target.value = ""
    if (val === null) val = this.state.nodeValues.length // new chlid node button pushed without value
 
    console.log('ADD NODE. ', nodeIndex, val)
    // nodeChildren is an array, 
    // index corresponds to the index of the value stored in nodeValues array
    // nodeChildren[index] is an array containing pointers/indices of children/descendeants of this node in the nodeValues array
    // each time we add a descendent, append a new reference to the nodeValues index storing the new descendant's value
    const newChildren = this.state.nodeChildren[nodeIndex] ? [...this.state.nodeChildren[nodeIndex], this.state.nodeValues.length] : [this.state.nodeValues.length]
    console.log('NEW CHILDREN at nodeIndex ', nodeIndex, newChildren)
    const updatedNodeChildren = [...this.state.nodeChildren]
    updatedNodeChildren[nodeIndex] = newChildren

    this.setState(prevState => ({
      nodeChildren: updatedNodeChildren, 
      nodeValues: [...prevState.nodeValues, val], 
      idCounter: prevState.idCounter + 1,
      childrenShowing: [...prevState.childrenShowing, true] // default to showing any children
    }))
    if (event) event.target[0] === undefined ? event.target.value = "" : event.target[0].value = ""
  }

  setValue(e) {
    console.log('[GET VALUE] placeholder: '+e.target.placeholder+". val: "+e.target.value)
    const val = e.target.placeholder || e.target.value
    e.target.value = val
    this.setState(prevState => ({...prevState, currentVal: val}))
  }

  rebase(id, val) {
    console.log("[REBASING] id: "+id+". val: "+val)
    return true
  }

  createRoot(event, history) {
    event.preventDefault()
    if (!event.target || !event.target[0]) return new Error("Unable to create root node. Try again later.")    
    const val = event.target[0].value
    console.log("[CREATE ROOT] val: "+val)

    this.setState({
      nodeChildren: [[]],
      nodeValues: [val],
      idCounter: 0,
      childrenShowing: [true],
      currentVal: ""
    })
    event.target[0].value = ""
    return history.push(`/${val}`)
  }

  toggleShowingChildAt(idx) {
    console.log('SHOW CHILD ',idx)
    const newChildrenShowing = [...this.state.childrenShowing]
    newChildrenShowing[idx] = !this.state.childrenShowing[idx]
    this.setState({ childrenShowing: newChildrenShowing })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Nodepad</h1>        
        </header>

        <section>
          <Router>
            <Switch>
              <Route path="/welcome">
              {({ history }) => 
                <Welcome 
                  history={history}
                  createRoot={this.createRoot.bind(this)} 
                  edit={this.edit.bind(this)} 
                />
              }
              </Route>
              <Route path="/:id">
                {({ history }) => 
                  <Tree 
                    history={history} 
                    nodeChildren={this.state.nodeChildren}
                    nodeValues={this.state.nodeValues}
                    currentIdx={this.state.currentIdx}
                    childrenShowing={this.state.childrenShowing}
                    edit={this.edit.bind(this)} 
                    remove={this.remove.bind(this)} 
                    addNode={this.addNode.bind(this)}
                    update={this.update.bind(this)}
                    setValue={this.setValue.bind(this)}
                    rebase={this.rebase.bind(this)}
                    toggleShowingChildAt={this.toggleShowingChildAt.bind(this)}
                  /> 
                }
              </Route>
              <Route>
                <Redirect to="/welcome" />
              </Route>
            </Switch>
          </Router>
        </section>

      </div>
    )
  }
}

export default App
