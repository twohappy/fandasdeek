import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { Category } from "../entities/category.entity";
import { Fragment } from "../entities/fragment.entity";
import { Point } from "../entities/point.entity";

const now = new Date();
const CategorySeed: Partial<Category>[] = [
  {
    name: "JS",
    created_at: now,
    updated_at: now
  },
  {
    name: "HTML",
    created_at: now,
    updated_at: now
  }
];

const PointSeed: Partial<Point>[] = [
  {
    name: "inheritance",
    content: "some concepts.. here",
    created_at: now,
    updated_at: now
  },
  {
    name: "flex",
    content: "flex layout concepts here...",
    created_at: now,
    updated_at: now
  }
];

const FragmentSeed: Partial<Fragment>[] = [
  {
    name: "a js example",
    content: "### js code here...",
    created_at: now,
    updated_at: now
  },
  {
    name: "a css example",
    content: "### js code here...",
    created_at: now,
    updated_at: now
  }
];

export class InitSeeder1573292966832 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const categories = await getRepository(Category).save(CategorySeed);
    const fragments = await getRepository(Fragment).save(FragmentSeed);
    PointSeed.forEach((point, index) => {
      point.categories = [categories[index]];
      point.fragments = [fragments[index]];
    });

    await getRepository(Point).save(PointSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
