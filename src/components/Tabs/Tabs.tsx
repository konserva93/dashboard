import { GetTabs } from '@api/tabs';
import { Tab } from '@src/ui/Tabs/Tab';
import { TabPanel } from '@components/Tabs/TabPanels/TabPanel';
import { Tabs as TabsView } from '@src/ui/Tabs/Tabs';
import React, { useState } from 'react';

export function Tabs() {
  const tabs = GetTabs(); // TODO: useTabsStorage, request on mount
  const [selected, setSelected] = useState(0);
  return tabs.length
    ? (
      <TabsView defaultId={0} onChange={id => setSelected(id)}>
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            id={idx}
            caption={tab.caption}
            isSelected={selected === idx}
            panel={<TabPanel type={tab.type} properties={tab.properties} />}
          />
        ))}
      </TabsView>
    )
    : null;
}
