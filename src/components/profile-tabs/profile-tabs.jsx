import * as React from 'react';
import TabBody from 'components/tab-body/tab-body';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ProfileTabs({data}) {

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabHeaders = Object.keys(data).map((item, i) => {
    let currentValue = String(i + 1);
    return (
      <Tab label={item} value={currentValue} key={currentValue} />
    )
  });

  const tabBodies = Object.values(data).map((item, i) => {
    let currentValue = String(i + 1);
    return (
      <TabPanel value={currentValue} key={currentValue} >
        <TabBody item={item} />
      </TabPanel>
    )
  });

  return (
    <div className="content-panel-tabs">
      <Box sx={{ width: '100%', typography: 'body1', paddingTop: 4}} >
        <TabContext value={value} >

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered={true}>
              { tabHeaders }
            </TabList>
          </Box>

            { tabBodies }

        </TabContext>
      </Box>
    </div>
  );
}