function Header() {
  return (
    <header className="position-relative">
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('bg.jpg')",
          backgroundPosition: "center",
          height: 400,
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="d-flex justify-content-center align-items-center h-100 position-relative"
          style={{ zIndex: 3 }}
        >
          <div className="text-white">
            <h1 className="mb-1">Pizzeria Mamma Mia</h1>
            <h4 className="mb-3">Tenemos las mejores pizzass</h4>
            <hr />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
