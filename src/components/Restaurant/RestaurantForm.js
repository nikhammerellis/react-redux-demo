import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';

import CustomFormText from '../../common/CustomFormText';
import * as validations from '../../common/validations/customValidations';

class RestaurantForm extends Component {

  render(){

    const { handleSubmit, isFetching, fetchError, pristine, invalid } = this.props;

    return (
        <Grid fluid>
        { fetchError ? <div className="alert alert-danger" role="alert"><strong>Problemo Macho Man!</strong>Check your information and try again!</div> : null }

          <form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}></Col>
            <Col md={4} style={{textAlign: 'center'}}>
              <Field
                name="restaurant_title"
                label="Title"
                type="text"
                component={CustomFormText}
                validate={[ validations.required ]}
              />
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <Field
                name="restaurant_short_description"
                label="Short description"
                type="text"
                component={CustomFormText}
                validate={[ validations.required ]}
              />
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <Field
                name="restaurant_phone"
                label="Phone"
                type="text"
                component={CustomFormText}
                validate={[ validations.required ]}
              />
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <Field
                textarea
                name="restaurant_description"
                label="Description"
                type="text"
                component={CustomFormText}
                validate={[ validations.required ]}
              />
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
            <button
              type="submit"
              value="Update"
              className="btn btn-primary"
              style={{}}
              disabled={ pristine || isFetching || invalid }>
              { (isFetching) ? "Updating..." : "Update Info" }
            </button>
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          </form>
        </Grid>
    )
  }
}

RestaurantForm = reduxForm({
  form: 'restaurantform',
  enableReinitialize: true
})(RestaurantForm);

function mapStateToProps(state) {
  return {
    initialValues: state.restaurant_settings.info,
  };
}

export default connect(mapStateToProps)(RestaurantForm);
