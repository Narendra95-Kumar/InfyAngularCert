import { FilterPipe } from '../filter.pipe';

describe('Filter products', () => {
  let pipe: FilterPipe
  let data: any
  beforeEach(() => {
    pipe = new FilterPipe();
    data = [
      {
        "id": 1,
        "productName": "Wooden Craft Clock",
        "cost": 5000,
        "color": "Brown",
        "description": "Wooden craft clock with a class dail that can be easily carried along with you.",
        "img": "../assets/Picture3.jpg",
        "category": "clock",
        "size": "5*4*5 cm"
      },
      {
        "id": 2,
        "productName": "Mountain Painting",
        "cost": 10000,
        "color": "blue",
        "description": "Beautiful mountain painting best suited as house and office decor.",
        "img": "../assets/Picture7.1.jpg",
        "category": "painting",
        "size": "15*5*10 cm"
      },
      {
        "id": 3,
        "productName": "Pottery Set",
        "cost": 3000,
        "color": "yellow",
        "description": "8 piece set of pottery items that are perefect for your family gatherings",
        "img": "../assets/Picture6.jpg",
        "category": "pottery",
        "size": "2 itmes - 5*5 cm, 1 item - 10*8 cm, i item - 3*6 cm, 4 items - 3*2 cm "
      }]
  })


  it('Filter products- providing no value returns null', () => {
    expect(pipe.transform(data, '').length).toBe(0)
  })

  it('Filter products- Providing arguments returns value', () => {
    let data1: any = [{
      "id": 3,
      "productName": "Pottery Set",
      "cost": 3000,
      "color": "yellow",
      "description": "8 piece set of pottery items that are perefect for your family gatherings",
      "img": "../assets/Picture6.jpg",
      "category": "pottery",
      "size": "2 itmes - 5*5 cm, 1 item - 10*8 cm, i item - 3*6 cm, 4 items - 3*2 cm "
    }]
    expect(pipe.transform(data, 'pottery')).toEqual(data1);
    expect(pipe.transform(data, 'hi').length).toBe(0)
  });
});
