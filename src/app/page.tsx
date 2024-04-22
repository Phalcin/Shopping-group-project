// import Banner from "@/components/Banner";
// import Products from "@/components/Products";

// export default function Home() {
//   return (
//     <main>
//       <Banner />
//       <Products />
//     </main>
//   );
// }

import Banner from "@/components/Banner";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
      <div className="lg:block hidden">
        <Banner />
      </div>
      <Products />
    </main>
  );
}
