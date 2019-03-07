if (window.Graffiti === undefined) {
  define([
    './graffiti.js',
    './utils.js',
    './storage.js',
    './udacityUser.js'
  ], (Graffiti,utils, storage, udacityUser) => {
    console.log('Graffiti loaded:', Graffiti);
    window.Graffiti = Graffiti;
    udacityUser.setUser();
    Graffiti.init();

    Jupyter.notebook.events.on('kernel_reconnecting.Kernel', (e) => { 
      console.log('Graffiti: kernel reconnecting');
    });

    Jupyter.notebook.events.on('kernel_ready.Kernel', (e) => { 
      console.log('Graffiti: kernel ready, possible kernel restart.', e);
      require(['jupytergraffiti/js/loader.js']);
      utils.saveNotebook();
    });

  });
} else {
  console.log('Graffiti already instantiated, not reinitializing');
}


