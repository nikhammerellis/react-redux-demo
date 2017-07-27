import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';

import EMReduxFormSelect from '../../common/CustomFormSelect';
import * as validations from '../../common/validations/customValidations';


class RestaurantHoursForm extends Component {

  renderTimes(){
    const { times, onDelete } = this.props;
    return times.map( (time, index ) => {
      return (
        <p key={index}>{time.day} {time.open_time} - {time.close_time} <button onClick={onDelete.bind(null, index)} className="btn btn-danger btn-xs">Remove</button></p>
      );
    });
  }

  render(){
    console.log(this.props);

    const { handleSubmit, invalid } = this.props;

    return (
      <Grid fluid>
        <label className="form-control-label">Hours</label>
        {this.renderTimes()}
        <form onSubmit={handleSubmit}>
        <Row>
         <Col md={2}></Col>
         <Col md={2}>
           <Field
             name="day"
             component={EMReduxFormSelect}
             type="select"
             items={[
               {key: 1, value: "Mon"},
               {key: 2, value: "Tue"},
               {key: 3, value: "Wed"},
               {key: 4, value: "Thurs"},
               {key: 5, value: "Fri"},
               {key: 6, value: "Sat"},
               {key: 7, value: "Sun"}
             ]}
             validate={[ validations.required ]}
           />
         </Col>
         <Col md={2}>
           <Field
             name="open_time"
             component={EMReduxFormSelect}
             type="select"
             items={[
               {key: 1, value: "7:00 am"},
               {key: 2, value: "8:00 am"},
               {key: 3, value: "9:00 am"},
               {key: 4, value: "10:00 am"},
             ]}
             validate={[ validations.required ]}
           />
         </Col>
         <Col md={2}>
           <Field
             name="close_time"
             component={EMReduxFormSelect}
             type="select"
             items={[
               {key: 1, value: "7:00 pm"},
               {key: 2, value: "8:00 pm"},
               {key: 3, value: "9:00 pm"},
               {key: 4, value: "10:00 pm"},
             ]}
             validate={[ validations.required ]}
           />
         </Col>
         <Col md={2}>
           <button
             type="submit"
             value="add time"
             className="btn btn-default btn-sm"
             style={{marginTop: '22px'}}
             disabled={ invalid }>
             Add
           </button>
         </Col>
         <Col md={2}></Col>
        </Row>

        </form>
      </Grid>
    );
  }
}

RestaurantHoursForm = reduxForm({
  form: 'restauranthoursform'
})(RestaurantHoursForm);

function mapStateToProps(state) {
  return {
    times: state.restaurant_settings.times
  };
}

export default connect(mapStateToProps)(RestaurantHoursForm);
