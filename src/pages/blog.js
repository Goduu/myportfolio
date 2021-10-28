import React from 'react';
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  getHeader,
  getSidebarContent,
  getInsetContainer,
  getFooter,
  getStandardScheme,
} from '@mui-treasury/layout';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton, Typography, useTheme } from '@material-ui/core';
import Talesorstory from '../components/cards/Talesorstory';
import StocksStudies from '../components/cards/StocksStudies';
import Intro from '../components/Intro';
import MyWork from '../components/MyWork';

const Header = getHeader(styled);
const SidebarConent = getSidebarContent(styled);
const InsetContainer = getInsetContainer(styled);
const Footer = getFooter(styled);

const standardScheme = getStandardScheme();

standardScheme.configureHeader(builder => {
  builder.update(config => {
    config.md.position = 'fixed';
  });
});

standardScheme.configureEdgeSidebar(builder => {
  builder
    .create('secondary', { anchor: 'right' })
    .registerPersistentConfig('xs', {
      width: 56,
      collapsible: false,
      headerMagnetEnabled: true,
      persistentBehavior: 'fit',
    });
});

standardScheme.configureInsetSidebar(builder => {
  builder.create('tertiary', { anchor: 'right' }).registerFixedConfig('md', {
    width: 200,
  });
});

const DarkThemeDemo = () => {
  const [dark, setDark] = React.useState(true);
  const theme = useTheme()
  return (
    <Root
      theme={createMuiTheme({ palette: { type: dark ? 'dark' : 'light' } })}
      scheme={standardScheme}
    >
      <CssBaseline />
      <Header color={'default'}>
        <Toolbar>
          <IconButton onClick={() => setDark(v => !v)} style={{ marginRight: 16 }}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </Header>
      <Intro />
      <MyWork />

    </Root>
  );
};

export default DarkThemeDemo;