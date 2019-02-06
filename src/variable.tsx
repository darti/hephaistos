import { Widget } from '@phosphor/widgets';
import { IDocumentManager } from '@jupyterlab/docmanager';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export namespace Hephaistos {
  export interface IOptions {
    docmanager: IDocumentManager;

    rendermime: IRenderMimeRegistry;
  }

  export class VariableView extends Widget {
    // private _docmanager: IDocumentManager;
    // private _rendermime: IRenderMimeRegistry;

    constructor(options: Hephaistos.IOptions) {
      super();
      // this._docmanager = options.docmanager;
      // this._rendermime = options.rendermime;

      this.updateVariables();
    }

    updateVariables() {
      const element = (
        <div className="jp-TableOfContents">
          <header>toto</header>
          <VariableList variables={['a', 'b']} toolbar={{}} />
        </div>
      );

      ReactDOM.render(element, this.node);
    }
  }
}

export interface IVariableProps {
  variables: string[];
  toolbar: any;
}

export interface IVariableStates {}

export class VariableList extends React.Component<
  IVariableProps,
  IVariableStates
> {
  render() {
    return (
      <div>
        {this.props.variables.map(v => (
          <div key={v}>{v}</div>
        ))}
      </div>
    );
  }
}
