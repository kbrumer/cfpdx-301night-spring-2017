
page.base('/server');
page('/', index)
page('/contact', contact)
page('/contact', render)
// page({ dispatch: false })


function index() {
  document.querySelector('p')
    .textContent = 'Index page generated on the client!';
}

function contact(ctx, next) {
  // document.querySelector('p')
  //   .textContent = 'Contact page generated on the client!';
  next();
}

function render() {
  document.querySelector('p')
    .textContent = 'Render page generated on the client!';
}

page();