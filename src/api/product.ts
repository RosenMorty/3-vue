import type { IPagination } from "@/types/global";
import type { IProduct } from "@/types/product";

interface IResponseProducts {
  products: IProduct[];
  pagination: IPagination;
}

export const getProducts = async (
  page: number = 1,
  searchText?: string
): Promise<IProduct[]> => {
  try {
    const query = new URLSearchParams({
      page: String(page),
      limit: String(1000),
    });
    const fetchResponse = await fetch(
      `https://vue-study.skillbox.cc/api/products?${query}`
    );
    const response = await fetchResponse.json();
    const products: IProduct[] = searchText
      ? response.items.filter((el: IProduct) => el.title.includes(searchText))
      : response.items;
    return {
      products: products,
      pagination: response.pagination,
    };
  } catch (err) {
    throw new Error("product response was not ok");
  }
};
