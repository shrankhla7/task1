export interface Employee {
    name: string;
    id: string;
    cardDetails: cardDetails[]
  }
  
 export interface cardDetails{
    type : string,
    qty:string,
    amount : string,
    tip : string
  }