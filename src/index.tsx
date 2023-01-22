import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/Counter';
import ParentMemo from './components/ContainerSampleMemo';
import ParentMemoCallback from './components/ContainerSampleMemoCallback';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { Parent2 } from './components/ContextSample2';
import ImageUploader from './components/RefSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <Parent />
    <Page />
    <hr />
    <Counter initialValue={10} />
    <hr />
    <ParentMemo />
    <hr />
    <ParentMemoCallback />
    <hr />
    <UseMemoSample />
    <hr />
    <Clock />
    <hr />
    <Parent2 />
    <hr />
    <ImageUploader />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
