import React, { useState } from 'react'
import TabComponent from './TabComponent'

const TabBody = ({tabsList}) => {

  const [activeTabId, setActiveTabId] = useState(1);

  const getActiveTabContent = () => {
    let activeTab = tabsList.filter((tab) => tab.id === activeTabId);
    return activeTab[0].tabContent;
  }

  return (
    <div className='text-center'>
      <p className="mt-4 font-bold">Tab Feature</p>
      <div className="flex justify-center items-center m-4">
        <ul className='flex'>
          {
            tabsList.map((tab) => (
              <div 
                key={tab.id} 
                className={"p-4 shadow-md cursor-pointer bg-blue-500 w-52 font-bold" + (tab.id === activeTabId ? ' bg-white border border-gray-400 text-black font-bold' : '')}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.tabName}
              </div>
            ))
          }
        </ul>
      </div>
      <TabComponent tabContent={getActiveTabContent()}/>
    </div>
  )
}

const Tab = () => {

  const tabsList = [
    {
      id: 1,
      tabName: 'Tab 1',
      tabContent: 'This is the content for tab 1',
      isActive: true
    },
    {
      id: 2,
      tabName: 'Tab 2',
      tabContent: 'Content of tab 2',
      isActive: false
    },
    {
      id: 3,
      tabName: 'Tab 3',
      tabContent: 'Content of tab 3',
      isActive: false
    }
  ];
  return (
    <TabBody tabsList={tabsList}/>
  )
}

export default Tab