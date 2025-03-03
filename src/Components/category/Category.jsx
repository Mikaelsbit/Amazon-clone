import React from "react";
import { categoryImages } from "./categoryinfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryImages.map((infos) => (
        <CategoryCard data={infos} key={infos.id} />

      ))}
    </section>
  );
}

export default Category;
