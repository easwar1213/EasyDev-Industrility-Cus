import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import AssetDetails from '../assets/components/AssetDetails';
export default class ExamplePage extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Assets</h3>
          </Col>
        </Row>
        <Row>
          <AssetDetails/>
        </Row>
      </Container>
    )
  }
}

