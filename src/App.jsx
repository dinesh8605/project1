import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandExample from './component/BrandExample';
import FormTextExample from './component/searchbar';
import ResponsiveBreakpointsExample from './component/table';
import AutoLayoutSizingExample from './component/AutoLayoutSizingExample';
import './App.css'

const App = () => {
  return (
    <div>
      <BrandExample />
      <FormTextExample />
      <AutoLayoutSizingExample />
      <ResponsiveBreakpointsExample />
      
       

    </div>
  );
};

export default App;