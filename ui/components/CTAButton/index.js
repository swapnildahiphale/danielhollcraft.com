/**
 * Created by danielhollcraft on 4/29/17.
 */
import React, {
  PropTypes,
} from 'react';

import FontAwesome from 'react-fontawesome'
import {Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const CTAButton = ({type, text}) => {
  return (
  <LinkContainer to="/contact/">
    <Button bsStyle={type || "primary"} bsSize="large">
      <FontAwesome name="envelope" className='icon' /> {text || "Contact Me"}
    </Button>
  </LinkContainer>
  );
};

CTAButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};
CTAButton.defaultProps = {};

export default CTAButton;
