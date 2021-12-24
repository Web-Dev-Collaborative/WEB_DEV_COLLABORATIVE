import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

/*
* Tree class
*/
function Tree(props) { 
  // no props and/or tree, redirect to welcome page to start a new tree root
  if (!props || !props.nodeValues || props.nodeValues.length < 1 || !props.nodeChildren || !props.childrenShowing ) return <Redirect to="/welcome" />

  return (
    <div className="Tree">
      <section className="main">
        <ul>
          { props.childrenShowing.map((showChildren, nodeIndex) => (
              props.nodeValues[nodeIndex] === undefined ? null : (
                <ul key={nodeIndex}>

                  {/* <li className="btn-li">{props.nodeValues[nodeIndex]}</li> */}

                  { props.nodeChildren[nodeIndex] && props.nodeChildren[nodeIndex].length > 0 && showChildren &&
                    props.nodeChildren[nodeIndex].map(childIndex => (
                      <li 
                        key={`${nodeIndex}${props.nodeValues[childIndex]}`}
                        data-columns={`${nodeIndex}-${props.nodeValues[childIndex]}`} 
                        className="flex flex-li"
                      >
                        { props.nodeChildren[childIndex] &&
                          <button 
                            className={props.childrenShowing[childIndex] ? "btn-li btn-li-active" : "btn-li rotated"} 
                            onClick={() => props.toggleShowingChildAt(childIndex)} 
                            >&#9660;
                          </button> 
                        }
                        
                        <button className="btn-li" onClick={() => props.addNode(null, childIndex)} >+</button>
                        <input
                          type="text"
                          className="btn-li"
                          placeholder={props.nodeValues[childIndex]}
                          onChange={e => props.edit(e.target.value)} 
                          onBlur={() => props.update(childIndex)}
                          onFocus={e => props.setValue(e)}
                        />
                      </li>
                    ))
                  }
                </ul>
              )
            ))
          }
        </ul>
        <form onBlur={e => props.addNode(e.target.value.trim(), props.currentIdx)} onSubmit={e => props.addNode(e.target[0].value.trim(), props.currentIdx, e)}>
          <input type="text" name="nodeValue" className="btn-li" placeholder="Enter new item..." />
        </form>
      </section>
    </div>
  )
}

Tree.propTypes = {
  addNode: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired, 
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  currentIdx: PropTypes.number,
  history: PropTypes.object.isRequired,
  rebase: PropTypes.func.isRequired,
  nodeChildren: PropTypes.array.isRequired,
  nodeValues: PropTypes.array.isRequired,
  childrenShowing: PropTypes.array.isRequired,
  toggleShowingChildAt: PropTypes.func.isRequired
}

export default Tree
