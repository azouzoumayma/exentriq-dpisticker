import React, { Component, Fragment } from 'react';
import { Button, Icon, Modal } from 'antd';
import Dropzone from 'react-dropzone';


import './ImageDropZone.css';
class ImageDropZone extends Component {
  constructor() {
    super();
    this.state = { image: null, visible: false };
  }

showModal(){
  this.setState({
    visible: true,
  });
}

handleOk(e){
  console.log(e);
  this.setState({
    visible: false,
  });
}

handleCancel(e){
  console.log(e);
  this.setState({
    visible: false,
  });
}


  onHandleDrop (image) {
    this.setState({
      image,
    });
  }

  removeImage() {
    this.setState({
      image: null,
    });
  }

  render() {
    console.log(this.state.image);
    const { image } = this.state;
    const imagePreview = image !== null ? image[0].preview : null;
    return (
      <Fragment>
        <div className="dropzone_area">
          <Dropzone onDrop={this.onHandleDrop.bind(this)} accept="image/*" multiple={false} disableClick={ this.state.image !== null ? true : false }	>
          {
            imagePreview !== null ?
             <div className="image-wrapper">
              <Button className="remove-button" shape="circle" onClick={this.removeImage.bind(this)} >
                <Icon type="close" theme="outlined" />
              </Button>
              <img src={imagePreview} />
             </div>
             :
            <Icon
              className="upload-icon"
              type="upload"
            />
          }
          </Dropzone>
        </div>
        <Modal
          title="ARTWORK PREVIEW"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          okText="Approve & continue"
          okButtonProps={{ disabled: this.state.image !== null ? false : true }}
          cancelButtonProps={{ disabled: this.state.image !== null ? false : true }}
        >
        {
          imagePreview !== null ?
      
            <img src={imagePreview} />

           :
          <span>Waiting for upload</span>
        }
        </Modal>
        <div className="preview-button-wrapper" >
          <Button type="primary" icon="eye" onClick={this.showModal.bind(this)}>Preview</Button>
        </div>
      </Fragment>
    )
  }
}

export default ImageDropZone;
