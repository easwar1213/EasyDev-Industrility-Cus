import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { changeThemeToDark, changeThemeToLight } from '../../../redux/actions/themeActions';

class SidebarContent extends PureComponent {
  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
    this.hideSidebar();
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
    this.hideSidebar();
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title='Dashboard' icon='home' route='/dashboard' onClick={this.hideSidebar} />
          <SidebarLink title='Assets' icon='diamond' route='/assets' onClick={this.hideSidebar} />
          <SidebarLink title='Devices' icon='chart-bars' route='/devices' onClick={this.hideSidebar} />
        </ul>
        <ul className='sidebar__block'>
          <SidebarCategory title='Layout' icon='layers'>
            <li className='sidebar__link' onClick={this.changeToLight}>
              <p className='sidebar__link-title'>Light Theme</p>
            </li>
            <li className='sidebar__link' onClick={this.changeToDark}>
              <p className='sidebar__link-title'>Dark Theme</p>
            </li>
          </SidebarCategory>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />        
        <ul className='sidebar__block'>
          <SidebarLink title='Log Out' icon='exit' route='/log_in' />
          <SidebarLink title='Industrility' icon='text-align-justify' route='http://www.industrility.com/'
            onClick={this.hideSidebar} />
        </ul>
      </div>
    )
  }
}

export default connect()(SidebarContent);