<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acer_shop</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
    <script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <nav class="navbar navbar-translucent md:navbar-expand md:d-flex"></nav>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/docs/6.0/assets/brand/bootstrap-logo.svg" alt="MyShop" width="30" height="24" class="d-inline-block align-text-top">
                </a>
                <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" aria-hidden="true"></span>
                </button>
                <dialog class="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                <div class="drawer-header">
                    <h5 class="drawer-title" id="navbarDrawerLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                </div>
                <div class="drawer-body mb-2 md:mb-0">
                    <ul class="nav navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                        Menu
                        </button>
                        <div class="menu">
                        <a class="menu-item" href="#">Action</a>
                        <a class="menu-item" href="#">Another action</a>
                        <hr class="menu-divider">
                        <a class="menu-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                    <form class="hstack gap-2" role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn-solid btn-icon theme-secondary" type="submit">
                        <svg class="bi" width="16" height="16"><use href="#search" /></svg>
                    </button>
                    </form>
                </div>
                </dialog>
            </div>
    </header>
    <main>
        <div class="container-fluid">
            <img src="https://placeholder.co/1280x960" class="img-fluid position-absolute z-n1" alt="...">
            <h1 class="text-center m-auto">Welcome to Acer Shop</h1>
        </div>

    </main>
    <footer>

    </footer>
        
    
</body>
</html>