import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the hephaistos extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'hephaistos',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension hephaistos is activated!');
  }
};

export default extension;
