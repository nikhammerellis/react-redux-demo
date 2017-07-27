import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor';

import defaultImage from './empty-avatar.png';


class ImageUpload extends Component {
  constructor(props){
    super(props);

    this.state = {
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      borderRadius: 0,
      preview: null,
      width: 200,
      height: 200,
      disableSave: true,
    }
  }


  handleNewImage = (e) => {
    this.setState({ image: e.target.files[0] })
  };

  handlePreview = (data) => {
    const img = this.editor.getImageScaledToCanvas().toDataURL()

    this.setState({
      preview: {
        img,
        scale: this.state.scale,
        width: this.state.width,
        height: this.state.height,
        borderRadius: this.state.borderRadius
      },
      disableSave: false
    })
  }

  handleSave = (data) => {
    this.props.handleImageUpload(this.state.preview);
  }

  handleScale = (e) => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }
  rotateLeft = (e) => {
    e.preventDefault()

    this.setState({
      rotate: this.state.rotate - 90
    })
  }
  rotateRight = (e) => {
    e.preventDefault()
    this.setState({
      rotate: this.state.rotate + 90
    })
  }
  handleBorderRadius = (e) => {
    const borderRadius = parseInt(e.target.value, 10)
    this.setState({ borderRadius })
  }
  handleXPosition = (e) => {
    const x = parseFloat(e.target.value)
    this.setState({ position: { ...this.state.position, x } })
  }
  handleYPosition = (e) => {
    const y = parseFloat(e.target.value)
    this.setState({ position: { ...this.state.position, y } })
  }
  logCallback (e) {
    console.log('callback', e)
  }
  setEditorRef = (editor) => {
    if (editor) this.editor = editor
  }
  handlePositionChange = position => {
    console.log('Position set to', position)
    this.setState({ position })
  }


  render () {
    return (
      <div>
        <AvatarEditor
          style={{ marginLeft: '10px'}}
          ref={this.setEditorRef}
          scale={parseFloat(this.state.scale)}
          width={this.state.width}
          height={this.state.height}
          position={this.state.position}
          onPositionChange={this.handlePositionChange}
          rotate={parseFloat(this.state.rotate)}
          borderRadius={this.state.borderRadius}
          onSave={this.handleSave}
          onLoadFailure={this.logCallback.bind(this, 'onLoadFailed')}
          onLoadSuccess={this.logCallback.bind(this, 'onLoadSuccess')}
          onImageReady={this.logCallback.bind(this, 'onImageReady')}
          onImageLoad={this.logCallback.bind(this, 'onImageLoad')}
          onDropFile={this.logCallback.bind(this, 'onDropFile')}
          image={this.state.image || defaultImage}
        />
        <br />
        New File:
        <input
          name='newImage'
          type='file'
          onChange={this.handleNewImage}
        />
        <br />
        Zoom:
        <input
          name='scale'
          type='range'
          onChange={this.handleScale}
          min='1'
          max='2'
          step='0.01'
          defaultValue='1'
        />
        <br />
        Border radius:
        <input
          name='scale'
          type='range'
          onChange={this.handleBorderRadius}
          min='0'
          max='100'
          step='1'
          defaultValue='0'
        />
        <br />
        X Position:
        <input
          name='scale'
          type='range'
          onChange={this.handleXPosition}
          min='0'
          max='1'
          step='0.01'
          value={this.state.position.x}
        />
        <br />
        Y Position:
        <input
          name='scale'
          type='range'
          onChange={this.handleYPosition}
          min='0'
          max='1'
          step='0.01'
          value={this.state.position.y}
        />
        <br />
        Rotate:
        <button className="btn btn-default" onClick={this.rotateLeft}>Left</button>
        <button className="btn btn-default" onClick={this.rotateRight}>Right</button>
        <br />
        <br />
        <h5 style={{textAlign: 'center'}}>* Preview your image before saving</h5>
        <input type='button' className="btn btn-default preview-spacing" onClick={this.handlePreview} value='Preview' />
        <button disabled={this.state.disableSave} className="btn btn-primary pull-right preview-spacing" onClick={this.handleSave}>Save Image</button>
        <br />
        { !!this.state.preview &&
          <img
            src={this.state.preview.img}
            alt=''
            style={{ borderRadius: `${(Math.min(this.state.preview.height, this.state.preview.width) + 10) * ((this.state.preview.borderRadius / 2) / 100)}px`, marginLeft: '35px' }}
          />
        }
      </div>
    )
  }
}


export default ImageUpload;
