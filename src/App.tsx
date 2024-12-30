import React from 'react';
import './App.css';
// import List1 from './list1.tsx';
// import List2 from './list2.tsx';
import List3 from './list3.tsx';
import ImmerDemo from './immerDemo.tsx';

import UseRefDemo from './useRefDemo.tsx'
// import useTitle from './hooks/useTitle.ts';
import useMouse from './hooks/useMouse.ts';
import useGetInfo from './hooks/useGetInfo.ts';
// import { useTitle } from 'ahooks'


function App() {
  // useTitle('App5')
  // useTitle('App4')
  const {x,y} = useMouse()
  const {loading,info} = useGetInfo()
  return (
    <>
    <p></p>
    <div>{x}-{y}</div>
    <div>{loading ? '加载中......' :''}-{info}</div>
    
    {/* <List1 /> */}
    {/* <List2 /> */}

    <List3 />
    <ImmerDemo />
    <UseRefDemo />

    </>
  )
}

export default App;
