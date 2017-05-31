
// content

var content = document.querySelector('#content');

// current page indicator

var p = document.querySelector('#page');

// "mount" it

page.base('/transitions');

// transition "middleware"

page('*', function(ctx,  next){
  if (ctx.init) {
    console.log('in init');
    next();
  } else {
    console.log('in transition');
    content.classList.add('transition');
    setTimeout(function(){
      content.classList.remove('transition');
      next();
    }, 300);
  }
})

page('/c*', function(ctx, next){
  console.log('in c-star');
  next();
})

// regular pages

page('/', function(ctx, next){
  console.log('/');
  p.textContent = '';
  next();
});

page('/contact', function(ctx, next){
  console.log('/contact');
  p.textContent = 'contact page';
  next();
});

page('/about', function(ctx, next){
  console.log('/about');
  p.textContent = 'about page';
  next();
});

page('*', function(ctx, next){
  console.log('cleanup');
});

page()