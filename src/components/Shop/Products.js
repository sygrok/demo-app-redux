import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My first book", description: "best book" },
  {
    id: "p2",
    price: 8,
    title: "My second book",
    description: "second best book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((x) => (
          <ProductItem
            key={x.id}
            title={x.title}
            price={x.price}
            description={x.description}
            id={x.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
