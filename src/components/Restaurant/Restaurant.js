import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

import ImageUpload from './ImageUpload';
import '../App.css';
import * as restaurantActions from './actions';
import RestaurantForm from './RestaurantForm';
import RestaurantHoursForm from './RestaurantHoursForm'

class Restaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.open   = this.open.bind(this);
    this.close  = this.close.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.removeTime = this.removeTime.bind(this);
  }

  componentDidMount(){
    const { actions } = this.props;
    actions.getRestaurantData();
  }

  close() { //React State
    this.setState({ showModal: false });
  }
  open() { //React State
    this.setState({ showModal: true });
  }

  handleImageUpload(imgInfo){
    this.setState({
      showModal: false
    });
    this.props.actions.addPhoto(imgInfo);
  }

  removeImage = (index, e) => {
    e.stopPropagation();
    this.props.actions.deletePhoto(index);
  }

  handleUpdate = (values) => {
    var details = {
      restaurant_title: values.restaurant_title.trim(),
      restaurant_short_description: values.restaurant_short_description.trim(),
      restaurant_phone: values.restaurant_phone.trim(),
      restaurant_description: values.restaurant_description.trim()
    }
    this.props.actions.updateRestaurant(details);
  }

  handleTimes = (values) => {
    console.log(values);
    var details = {
      day: values.day,
      open_time: values.open_time,
      close_time: values.close_time
    }
    this.props.actions.addRestaurantHours(details);
  }

  removeTime = (index, e) => {
    e.stopPropagation();
    this.props.actions.deleteRestaurantHours(index);
  }

  renderImages() {
    const { images }  = this.props;
    return images.map( ( image, i ) => {
        return (
          <div key={i}>
            <img  alt='' src={image.img} className="image" style={{ borderRadius: `${(Math.min(image.height, image.width) + 10) * ((image.borderRadius / 2) / 100)}px`}}/>
            <button onClick={this.removeImage.bind(null, i)}><span className="glyphicon glyphicon-trash"></span></button>
          </div>
        );
    });

  }

  render() {

    console.log('Images in state: ', this.props.images);
    console.log('props in Restaurant: ', this.props);

    return (
      <div className="pull-up slim-right">

        {/* Separate Redux Forms - easier to manage */}
        <RestaurantForm onSubmit={this.handleUpdate} />
        <hr />
        <br />
        <RestaurantHoursForm
          onSubmit={this.handleTimes}
          onDelete={this.removeTime}
        />

        <Modal show={this.state.showModal} onHide={this.close} bsSize="small">
        <Modal.Header closeButton>
          <Modal.Title>Image Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImageUpload handleImageUpload={this.handleImageUpload} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
        </Modal>
        <hr />
        <br />
        <p>Photos</p>
        {this.renderImages()}
        <div className="image-upload">
          <span className="glyphicon glyphicon-picture custom-pic-glyph"></span>
          <button onClick={this.open} className="btn btn-default btn-xs glyphicon glyphicon-plus custom-add-glyph"></button>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    images: state.restaurant_settings.images,
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(restaurantActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
