import { Pipe, PipeTransform } from '@angular/core';
@Pipe({  name: 'orderBy' })
export class OrderrByPipe implements PipeTransform {

    records = [
        { CategoryID: 1,  CategoryName: "Beverages", Description: "Coffees, teas" },
        { CategoryID: 2,  CategoryName: "Condiments", Description: "Sweet and savory sauces" },
        { CategoryID: 3,  CategoryName: "Confections", Description: "Desserts and candies" },
        { CategoryID: 4,  CategoryName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
        { CategoryID: 5,  CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
        { CategoryID: 6,  CategoryName: "Beverages", Description: "Beers, and ales" },
        { CategoryID: 7,  CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
        { CategoryID: 8,  CategoryName: "Confections", Description: "Sweet breads" },
        { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
        { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
       ];

    transform(records: Array<any>, args?: any): any {
        console.log("in pipe");
        console.log("recordes" + JSON.stringify(records) );
        console.log("args" + JSON.stringify(args) );
        console.log("args" + JSON.stringify(args.property) );
        return records.sort(function(a, b){
            console.log("a is " + JSON.stringify(a[args.property]))
            console.log("b is " + JSON.stringify(b[args.property]))
            if(a[args.property] < b[args.property]){
                console.log(a[args.property] + "div1" + b[args.property])
                return -1 * args.direction;
            }
            else if( a[args.property] > b[args.property]){
                console.log(a[args.property] + "div2" + b[args.property])
                return 1 * args.direction;
            }
            else{
                console.log(a[args.property] + "div3" + b[args.property])
                return 0;
            }
        });
        console.log("after" + records)
    };
}