import "./App.css";
import {Button} from 'antd';
import React from "react";
import {Input} from 'antd';
import Button1 from "../Button";
import { DatePicker, Space } from 'antd';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}





const { RangePicker } = DatePicker;


function App() {
  return (
    <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <Input placeholder="Basic usage"/>
    <Button1/>
    <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="year" />
  </Space>
  <Switch defaultChecked onChange={onChange} />
  </>

  );
}

export default App;
