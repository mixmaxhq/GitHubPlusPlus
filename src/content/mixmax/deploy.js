Router.on('start:mixmax', function(repo) {
  var pageheadActions = $('.pagehead-actions');
  if (!pageheadActions) {
    console.error('Could not find pagehead actions');
    return;
  }

  pageheadActions.prepend(Templates.deployButton({
    repo: repo
  }));
});
