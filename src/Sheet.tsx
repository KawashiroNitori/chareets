import * as React from 'react';
import {Map} from 'immutable';

import logo from './logo.svg';
import Information from './Information';
import Characteristics from './Characteristics';
import {Status} from './Status';
import {Skills} from "./Skills";


export class SheetData {
  attributes: Map<string, number>;
  information: Map<string, string>;

  constructor() {
    this.attributes = Map();
    this.information = Map();
  }
}

export const SheetContext = React.createContext(new SheetData());


class Sheet extends React.Component<{}, SheetData> {
  setInformation = (key: string) => (value: string) =>
    this.setState({...this.state, information: this.state.information.set(key, value)});
  setAttributes = (next: Map<string, number>): void =>
    this.setState({...this.state, attributes: next});

  constructor(props: {}) {
    super(props);
    this.state = new SheetData();
  }

  public render() {
    return (
      <React.StrictMode><SheetContext.Provider value={this.state}>
        <div className="Sheet section">
          <header className="Sheet-header container">
            <img src={logo} className="Sheet-logo" alt="logo"/>
            <h1 className="Sheet-title title">Chareets</h1>
            <p className="S-intro subtitle">目前是一个 CoC 7 Edition 人物卡生成器</p>
            <p>欢迎你，{this.state.information.get("name", "不知名的冒险者")}</p>
          </header>

          <Information information={this.state.information} set={this.setInformation}/>
          <Characteristics attributes={this.state.attributes} set={this.setAttributes}/>
          <Status attributes={this.state.attributes}/>
          <Skills attributes={this.state.attributes}/>
        </div>
      </SheetContext.Provider></React.StrictMode>
    );
  }
}

export default Sheet;
