import React, {PureComponent} from 'react';
import LogInForm from './components/LogInForm';

export default class LogIn extends PureComponent {
  
  render() {
    return (
      <div className='account'>
        <div className='account__wrapper'>
          <div className='account__card'>
            <div className='account__head'>
              <h3 className='account__title'>Welcome to <span className='account__logo'>Industr<span
                className='account__logo-accent'>ility</span></span></h3>
              <h4 className='account__subhead subhead'>Simple IoT Technology Solutions for Industrial OEMs</h4>
            </div>
            <LogInForm onSubmit/>           
          </div>
        </div>
      </div>
    )
  }
}

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
