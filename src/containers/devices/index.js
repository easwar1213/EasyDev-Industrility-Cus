import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import RandomAnimatedLine from './components/RandomAnimatedLine';
import DynamiclyRefreshedDoughnut from './components/DynamiclyRefreshedDoughnut';
import DeviceDetails from './components/DeviceDetails';

class DevicesJS extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Devices</h3>            
          </Col>
        </Row>
        <Row>
          <DynamiclyRefreshedDoughnut/>
          <RandomAnimatedLine/>                          
        </Row>
        <Row>
          <DeviceDetails/>
        </Row>            
      </Container>
    )
  }
}

export default (DevicesJS);
