import React from 'react';
import './Dropdown.css';

export class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.items = props.items
        this.state = {
            // Store record of currently selected items and whether dropdown is showing
            selectedItems: new Set(),
            dropped: false,
        }
        this.changeSelection = this.changeSelection.bind(this);
        this.listItems = this.listItems.bind(this);
        this.listDropdown = this.listDropdown.bind(this);
    }

    // Lists all currently selected items on top header
    listItems() {
        let disp = ''
        this.state.selectedItems.forEach((item) => {
            if (disp !== '') {
                disp += ', '
            }
            disp += item
        })
        return disp
    }

    // Upon checking/unchecking an item, add or remove it from selectedItems
    changeSelection(item) {
        if (this.state.selectedItems.has(item)) {
            this.setState(prevState => {
                prevState.selectedItems.delete(item)
                return {selectedItems: prevState.selectedItems}
            })
        }
        else {
            this.setState(prevState => {
                prevState.selectedItems.add(item)
                return {selectedItems: prevState.selectedItems}
            })
        }
    }

    // List all items 
    listDropdown() {
        console.log(this.items)
        return this.items.map((item) => (
            <div className='itemSelect'>
                <input className='check' type='checkbox' checked={this.state.selectedItems.has(item) ? true : false} onClick={() => this.changeSelection(item)}></input>
                <p className='itemLabel'>{item}</p>
            </div> 
        ))
    }

    render() {
        return (
            <div>
                <div className='topLevel'>
                    {/* Button to trigger/hide dropdown */}
                    <button className='mainButton' onClick={() => this.setState(prevState => ({dropped: !prevState.dropped}))}>
                        {this.state.selectedItems.size>0 ? this.listItems() : this.state.dropped ? 'Click to Hide Choices' : 'Click to Display Choices'}
                        <img src='downarrow.png' className='downArrow'></img>
                    </button>
                    {/* Button to select all options */}
                    <button className='selectAll' onClick={() => this.setState({selectedItems: new Set(this.items)})}>Select All</button>
                    {/* Button to deselect all options */}
                    <button className='deselectAll' onClick={() => this.setState({selectedItems: new Set()})}>Deselect All</button>
                </div>

                {/* Full dropdown list */}
                {this.state.dropped && 
                    <div className='fullDropdown'> 
                        {this.listDropdown()}
                    </div> 
                }
            </div>
        )
    }
}