import React from 'react';

import { 
  MobileResume,
  TabletResume,
  DesktopResume
} from './Layouts';

export default class LayoutSelector extends React.Component {
  state = {
    platform: 'mobile'
  };

  Breakpoint = Object.freeze({
    MOBILE: 750,
    TABLET: 1024,
    DESKTOP: 1400
  });

  getPlatformFromWidth = innerWidth => {
    if (
      window.innerWidth > this.Breakpoint.MOBILE &&
      window.innerWidth < this.Breakpoint.DESKTOP
    ) {
      return 'tablet';
    } else if (window.innerWidth >= this.Breakpoint.DESKTOP) {
      return 'desktop';
    } else {
      return 'mobile';
    }
  };

  componentDidMount() {
    this.setState({ platform: this.getPlatformFromWidth(window.innerWidth) });

    window.addEventListener('resize', () => {
      const currentPlatform = this.getPlatformFromWidth(window.innerWidth);

      if (this.state.platform !== currentPlatform) {
        this.setState({ platform: currentPlatform })
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    const Layout = {
      'mobile': MobileResume,
      'tablet': TabletResume,
      'desktop': DesktopResume
    };

    return (
      <>
        {Layout[this.state.platform](this.props.data)}
      </>
    );
  }
}
