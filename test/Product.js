const chai = require("chai");
const chaiHttp = require("chai-http");

process.env.NODE_ENV = "test";
const app = require("../index");
const Product = require("../models/product");

const should = chai.should();

chai.use(chaiHttp);

console.log(process.env.NODE_ENV);
describe("Products", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Product.deleteMany({}, (err) => {
      done();
    });
  });

  /*
   * Test the /GET route of product
   */
  describe("/GET products", () => {
    it("it should GET all the products", (done) => {
      chai
        .request(app)
        .get("/products")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});

/*
 * Test the /POST route of product
 */
describe("/POST product", () => {
  it("It should not POST a product without pages field", (done) => {
    let product = {
      name: "Tupi",
      price: 123,
      available: true,
      variants: [
        {
          color: "white",
          size: ["large", "medium", "extra-large"],
          quantity: 30,
        },
        {
          color: "red",
          size: ["small", "medium"],
          quantity: 20,
        },
      ],
    };
    chai
      .request(app)
      .post("/product")
      .send(product)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });
});
