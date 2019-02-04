import {
  ILayoutRestorer,
  IMimeDocumentTracker,
  JupyterLab,
  JupyterLabPlugin
} from '@jupyterlab/application';

import { IDocumentManager } from '@jupyterlab/docmanager';

import { IEditorTracker } from '@jupyterlab/fileeditor';

import { INotebookTracker } from '@jupyterlab/notebook';

import { IRenderMimeRegistry } from '@jupyterlab/rendermime';

import '../style/index.css';
import { IVariableRegistry, VariableRegistry } from './registry';
import { Hephaistos } from './variable';


/**
 * Initialization data for the hephaistos extension.
 */
const extension: JupyterLabPlugin<IVariableRegistry>  = {
  id: 'hephaistos',
  autoStart: true,
  requires: [
    IDocumentManager,
    IEditorTracker,
    ILayoutRestorer,
    IMimeDocumentTracker,
    INotebookTracker,
    IRenderMimeRegistry
  ],
  activate
}

function activate(
  app: JupyterLab,
  docmanager: IDocumentManager,
  editorTracker: IEditorTracker,
  restorer: ILayoutRestorer,
  mimeDocumentTracker: IMimeDocumentTracker,
  notebookTracker: INotebookTracker,
  rendermime: IRenderMimeRegistry) : IVariableRegistry{

    const variablesView = new Hephaistos.VariableView({ docmanager, rendermime })
    const registry = new VariableRegistry()

    app.shell.addToLeftArea(variablesView, { rank: 700 })
    return registry
}

export default extension;
