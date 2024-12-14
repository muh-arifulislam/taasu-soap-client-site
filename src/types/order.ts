export type TOrder = {
  _id: string;
  user: string;
  items: [];
  totalAmount: number;
  shippingAddress: string;
  payment: string;
  orderStatus?: string;
  statusHistory?: [];
};
