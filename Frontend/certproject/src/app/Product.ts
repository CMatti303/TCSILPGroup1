export interface Product{
    id?: number;
    name: String;
    category_id: number;
    price: number;
    discountPrice: number;
    image: String;
    description: String;
    createdOn: Date;
    isTopProduct: boolean
}