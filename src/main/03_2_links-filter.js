import React, { Component } from 'react';

class LinksFilter extends Component {
// this.props.handleCheckboxChange
// this.props.selectedItem

  render() {
    return (
      <div>
        <label><input type="checkbox" name="tag" value={this.props.tagN} onClick={this.props.handleCheckboxChange}/>{this.props.tagN}</label>
      </div>
    );
  }
}

export default LinksFilter;