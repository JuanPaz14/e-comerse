import { getPaginatedProductsWhitImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";




interface Props {
  searchParams:{
    page?:string;
  }
}

export default async function Home({searchParams}:Props) {

  const page = searchParams.page ? parseInt(searchParams.page): 1;
  const {products,currentPage,totalPages}= await getPaginatedProductsWhitImages({page});

  console.log(currentPage,totalPages);

  if(products.length ===0){
    redirect('/');
  }


  return (
    <div>
      <Title title="tienda" subtitle="todos los productos" className="mb-2"/>
      <ProductGrid products={products}/>
      <Pagination totalPages={totalPages}/>
    </div>
    
  );
}
