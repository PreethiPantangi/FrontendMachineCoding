import React, { useState } from 'react'

const ToDo = () => {

  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const onHitEnter = (e) => {
    if(e.key === 'Enter') {
      let toDoItem = {
        id: new Date().valueOf(),
        item: e.target.value, 
        toDo: true
      };
      setItemList([toDoItem, ...itemList]);
      setItem('');
    }
  }

  const updateItemState = (itemId) => {
    const _itemList = [...itemList];
    _itemList.forEach((item) => {
      if(item.id === itemId) {
        item.toDo = !item.toDo; 
      }
    });
    setItemList([..._itemList]);
  }

  return (
    <div>
      <p className='text-center mt-4 font-bold'>To Do list</p>
      <div className='m-4'>
        <input
          type='text'
          id='item'
          className='border border-black p-2 w-full'
          placeholder='Todo item...'
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyUp={onHitEnter}
        />
      </div>
      <div className='grid grid-flow-col'>
        <div className='col-span-6 m-4'>
          <p className='text-center font-bold shadow-xl bg-orange-400 p-2'>To Do</p>
          <div>
            <ul>
              {
                (itemList.filter(item => item.toDo))
                .map(item => 
                  <li 
                    key={item.id} 
                    className='m-4 hover:shadow-md bg-gray-300 p-2 flex justify-between border border-solid'
                  >
                    <p>{item.item}</p>
                    <p className='cursor-pointer hover:font-bold' onClick={() => updateItemState(item.id)}>Done</p>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className='col-span-6 m-4'>
          <p className='text-center font-bold shadow-xl bg-green-600 p-2'>Tasks Done</p>
          <div>
            <ul>
              {
                (itemList.filter(item => !item.toDo))
                .map(item => 
                  <li 
                    key={item.id} 
                    className='m-4 hover:shadow-md bg-gray-300 p-2 flex justify-between'
                  >
                    <p>{item.item}</p>
                    <p className='cursor-pointer hover:font-bold' onClick={() => updateItemState(item.id)}>ToDo</p>
                  </li>
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDo