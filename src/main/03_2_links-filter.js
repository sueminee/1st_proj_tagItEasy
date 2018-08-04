import React, { Component } from 'react';

class LinksFilter extends Component {
  render() {
    return (
      <div>
        <label><input type="checkbox" name="tag" value={this.props.tagN} />{this.props.tagN}</label>
      </div>
    );
  }
}

export default LinksFilter;