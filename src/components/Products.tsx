import Container from "./Container";
import Link from "next/link";
import { PcCase, ScanFace, Smartphone, Watch } from "lucide-react";
import Product from "./Product";
import { getProducts } from "@/helpers";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className=" mb-60">
      <Container>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center">
            Explore dozens of customized layouts made by our brilliant
            designers.
          </p>
          <div className="text-zinc-500 flex flex-wrap items-center gap-2 md:gap-6 mt-5">
            <Link
              href={"/phones"}
              className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
            >
              <Smartphone />
              <p className="ml-2">Phone</p>
            </Link>
            <div className="h-7 w-[1px] bg-designColor inline-flex md:hidden" />
            <Link
              href={"/phonecases"}
              className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
            >
              <PcCase />
              <p className="ml-2">Phone Case</p>
            </Link>
            <div className="h-7 w-[1px] bg-designColor inline-flex md:hidden" />

            <Link
              href={"/watches"}
              className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
            >
              <Watch />
              <p className="ml-2">Watches</p>
            </Link>
            <div className="h-7 w-[1px] bg-designColor inline-flex md:hidden" />

            <Link
              href={"/accessories"}
              className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
            >
              <ScanFace />
              <p className="ml-2">Accessories</p>
            </Link>
          </div>
        </div>
        <Product products={products} />
      </Container>
    </div>
  );
};

export default Products;
