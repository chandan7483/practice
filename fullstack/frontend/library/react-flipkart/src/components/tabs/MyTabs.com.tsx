import * as React from 'react';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { MyProps } from '../../pages/lessons/props/MyProps';
import { H1 } from '../../pages/lessons/elements/H1';
import { MyButton } from '../button/MyButton.com';
import { MyRatings } from '../ratting/MyRatings.com';
import { MyAvtar } from '../avtar/MyAvtar.com';
import { MyFragment } from '../fragment/MyFragment.com';
import { MyUseStateHook } from '../hook/MyUseStateHook.com';
import { TwowaysofCss } from '../two ways of css/TwowayOfcss.com';


export let MyTabs:React.FC<{}>=()=>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
console.log("newValue",typeof newValue)
    setValue(`${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="props" value="1" />
            <Tab label="Elemetnts" value="2" />
            <Tab label="mui elemts" value="3" />
            <Tab label="fragment" value="4" />
            <Tab label="hookes" value="5" />
            <Tab label="api" value="6" />
            <Tab label="2ways of css" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1"><MyProps/></TabPanel>
        <TabPanel value="2"><H1/></TabPanel>
        <TabPanel value="3">

<MyButton/>
<MyRatings/>
<MyAvtar/>
        </TabPanel>

        <TabPanel value="4">
          <MyFragment/>
        </TabPanel>
        <TabPanel value="5">
<h1>hookes</h1>
<MyUseStateHook/>

        </TabPanel>
        <TabPanel value="7">
        <TwowaysofCss/>
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}