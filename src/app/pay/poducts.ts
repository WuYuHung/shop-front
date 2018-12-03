export interface Order {
  constructor(first_name: string, last_name, company_name, address, email, phone,){
    this.first_name = first_name;
    this.last_name = last_name;
    this.company_name = company_name;
    this.address = address;
    this.email = email;
    this.phone = phone;

  }
  id: number;
  user_id: number;
  coupon_id: number;
  first_name: string;
  last_name: string;
  company_name: string;
  address: string;
  email: string;
  phone: number;
}
