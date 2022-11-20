
import {
    Tabs, TabList, TabPanels, Tab, TabPanel,

  } from '@chakra-ui/react'

import Link from 'next/link'
import Contact from './Contact'

export const TabContents = () => {
    
    return (
        <>
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            <Tab>About me</Tab>
            <Tab>Contact</Tab>
          </TabList>

  <TabPanels>
    <TabPanel>
    <Link href="/">Home</Link>
    </TabPanel>
    <TabPanel>
      <Link href="/">ewf</Link>
    </TabPanel>
    <TabPanel>
      <Contact />
    </TabPanel>
  </TabPanels>
</Tabs>
</>
    )
}
