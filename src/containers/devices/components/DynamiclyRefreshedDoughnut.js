import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Panel from '../../../components/Panel';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    '% Unavailable',
    '% Avaiable',    
  ],
  datasets: [{
    data: [getRandomInt(0, 100), getRandomInt(0, 100)],
    backgroundColor: [            
      '#81C784',
      '#D81B60',
    ],
    hoverBackgroundColor: [
      '#81C784',
      '#D81B60',
    ],
    borderColor: 'rgba(255,255,255,0.54)'
  }]
});

class DynamiclyRefreshedDoughnut extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: getState()
    };
  }
  
  componentWillMount() {
    setInterval(() => {
      this.setState({data: getState()});
    }, 4000);
  }
  
  render() {
    const {t} = this.props;

    return (       
      <Col md={12} lg={12} xl={6}>
        <Card>          
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>% Device Status Distribution</h5>
            </div>
            <Doughnut data={this.state.data}/>
          </CardBody>
        </Card>
      </Col>           
    )
  }
}

export default (DynamiclyRefreshedDoughnut);
