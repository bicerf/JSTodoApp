(function InitMenu() {
  const menuHtml = `
    <div class="ui top menu">
    <div class="item">
        <a href="index.html">
            <img height="30" width="30" src="assets/images/js.jpg">
        </a>
    </div>
    <a href="todos.html" class="item">Todos Promise</a>
    <a href="todos-async.html" class="item">Todos async/await</a>
    <a class="item">Testimonials</a>
    <a class="item">Sign-in</a>
    </div>
    `;
  // dökümanın bodysine menuHtml append et
  const menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = menuHtml;
})(); // self Invoked functions
