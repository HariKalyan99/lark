const Hero = () => {
  return (
    <section
      className="py-5 text-center container-fluid"
      style={{
        background: "rgb(255,255,255)",
        background:
          "linear-gradient(150deg, rgba(255,255,255,1) 61%, rgba(1,84,62,1) 61%, rgba(1,84,62,1) 69%)",
        "min-height": "500px",
        "border-bottom": "1px solid white",
        "border-top": "1px solid white",
      }}
    >
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-bolder" style={{fontSize: "5rem"}}>LARK</h1>
          <h1 className="lead text-body-dark fw-bolder fs-1" style={{textShadow: "10px 20px 30px black"}}>
            Leadership and Adaptability in Resourceful Knowledge.
          </h1>
          {/* <p>
          <a href="#" className="btn btn-primary my-2">Main call to action</a>
          <a href="#" className="btn btn-secondary my-2">Secondary action</a>
        </p> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
