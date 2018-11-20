import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Visits from './components/Visits';
import TotalPageViews from './components/TotalPageViews';
import NewUsers from './components/NewUsers';
import BounceRate from './components/BounceRate';
import ABTestingAnalytics from './components/ABTestingAnalytics';

class DefaultDashboard extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Visits/>
          <TotalPageViews/>
          <NewUsers/>
          <BounceRate/>          
        </Row>
        <Row>
          <ABTestingAnalytics/>         
        </Row>        
      </Container>
    )
  }
}

export default (DefaultDashboard);

