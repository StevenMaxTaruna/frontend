function Navbar() {
   return(
<nav class="navbar navbar-expand-lg bg-dark  sticky-top" data-bs-theme="dark">
  <div class="container text-light">
    <a class="navbar-brand" href="#">Cinema Kita</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#trending">Trending </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#superhero">Hero</a>
      </li>
    </ul>
  </div>
  </div>
</nav>  

 );
};

export default Navbar;