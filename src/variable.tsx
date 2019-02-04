import { Widget } from '@phosphor/widgets';
import { IDocumentManager } from '@jupyterlab/docmanager';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';

export namespace Hephaistos {
  export interface IOptions {
    docmanager: IDocumentManager;

    rendermime: IRenderMimeRegistry;
  }

  export class VariableView extends Widget {
    private _docmanager: IDocumentManager;
    private _rendermime: IRenderMimeRegistry;

    constructor(options: Hephaistos.IOptions) {
      super();
      this._docmanager = options.docmanager;
      this._rendermime = options.rendermime;
    }
  }
}
