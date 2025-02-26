/*
สร้างฟังก์ชันชื่อ summarizeOrders(orders) ซึ่งทำหน้าที่ประมวลผลรายการสั่งซื้อ (Order) เพื่อสรุปข้อมูล “ยอดขายแยกตามสินค้า” โดยที่
    orders เป็น Array ของ Object ที่มีโครงสร้าง เช่น 
        [
            {
                orderId: 1,
                orderDate: "2025-01-10",
                items: [
                { productId: "P001", productName: "Pen", quantity: 10, price: 5 },
                { productId: "P002", productName: "Book", quantity: 2, price: 50 }
                ]
            },
            {
                orderId: 2,
                orderDate: "2025-01-11",
                items: [
                { productId: "P001", productName: "Pen", quantity: 5, price: 5 },
                { productId: "P003", productName: "Pencil", quantity: 10, price: 2 }
                ]
            },
            ...
        ]
    โดยที่    orderId: เลขไอดีของออร์เดอร์
            orderDate: วันที่สั่งซื้อ
            items: Array ของวัตถุย่อย ที่ระบุว่าสินค้าใดถูกสั่งซื้อไปกี่ชิ้น และราคาต่อหน่วยเท่าไร
                - productId: รหัสสินค้า
                - productName: ชื่อสินค้า
                - quantity: จำนวนชิ้นที่สั่งซื้อ
                - price: ราคาต่อหน่วย

    สิ่งที่ฟังก์ชันต้องทำ
    - รวมยอดของสินค้าทุกออร์เดอร์ แล้วสรุปตามชื่อสินค้า (หรือ productId) ว่า
        มีการซื้อ สินค้านั้นทั้งหมดกี่ชิ้น (totalQuantity)
        มียอดขายรวม (totalSales) ของสินค้านั้นทั้งหมดเท่าไร สูตร totalSales = ∑(quantity × price)
        มี ออร์เดอร์ ที่สั่งสินค้านั้น กี่ครั้ง (orderCount) เช่น หากสินค้าถูกสั่งใน 3 ออร์เดอร์ ก็คือ 3
    - ผลลัพธ์ ที่คืนจากฟังก์ชัน summarizeOrders(orders) ให้เป็น Array ของ Object โดยแต่ละออบเจกต์มีโครงสร้างดังนี้
        {
            productId: "รหัสสินค้า",
            productName: "ชื่อสินค้า",
            totalQuantity: จำนวนทั้งหมดที่ขายได้,
            totalSales: ยอดรวม (บาท),
            orderCount: จำนวนออร์เดอร์ที่สั่งสินค้านี้
        }
            ตัวอย่าง: สมมติว่าในหลาย ๆ ออร์เดอร์ พบว่า productId = "P001", productName = "Pen"
                รวม quantity ได้ 20 ชิ้น
                รวม (quantity * price) ทุกออร์เดอร์ ได้ 100 บาท
                ถูกสั่งใน 3 ออร์เดอร์
                ข้อมูลของสินค้านี้ในผลลัพธ์จะเป็น
    - การจัดเรียง (Sort)
        ให้เรียงจากสินค้า ที่มียอดขายรวม (totalSales) มากที่สุดไปน้อยที่สุด (Descending Order)
        หากมียอดขายรวมเท่ากัน ให้เรียงตาม productName ตามลำดับตัวอักษร (Ascending Order) เป็นลำดับถัดไป
    - เงื่อนไขพิเศษ
        ถ้าไม่มีข้อมูลใน orders เลย (เช่น เป็น [] ว่าง) ให้คืนเป็น [] ว่าง
        สินค้าอาจจะมีการสั่งหลายครั้งในออร์เดอร์เดียวกัน (กรณีในชีวิตจริงค่อนข้างน้อย แต่สมมติได้)
*/

function summarizeOrders(orders) {
    // หากไม่มีข้อมูลหรือ orders ว่าง ให้คืนค่าเป็นอาร์เรย์ว่าง
    if (!orders || orders.length === 0)
        return [];

    let allPro = {}; // เก็บข้อมูลสินค้า โดยใช้ productId เป็น key

    // วนลูปทุกออร์เดอร์
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        let items = order.items; // ข้อมูลสินค้าในออร์เดอร์
        let orderPro = {}; // เก็บสินค้าที่สั่งในออร์เดอร์นี้ เพื่อไม่ให้นับซ้ำ

        // วนลูปแต่ละรายการสินค้าในออร์เดอร์
        for (let j = 0; j < items.length; j++) {
            let item = items[j];
            let productId = item.productId;
            let productName = item.productName;
            let quantity = item.quantity;
            let price = item.price;

            // ถ้ายังไม่เคยมีสินค้าตัวนี้ใน allPro
            if (!allPro[productId]) {
                allPro[productId] = {
                    productId: productId,
                    productName: productName,
                    totalQuantity: 0,
                    totalSales: 0,
                    orderCount: 0
                };
            }

            // คำนวณยอดขายและจำนวนสินค้าที่ขายได้
            allPro[productId].totalQuantity += quantity;
            allPro[productId].totalSales += quantity * price;

            // เช็คว่าออร์เดอร์นี้มีสินค้าตัวนี้หรือยัง
            if (!orderPro[productId]) {
                allPro[productId].orderCount += 1; // ถ้ามีให้เพิ่มจำนวนออร์เดอร์
                orderPro[productId] = true; // หมายว่าออร์เดอร์นี้มีสินค้านี้แล้ว
            }
        }
    }

    // เปลี่ยนข้อมูลสินค้าทั้งหมดเป็นอาร์เรย์
    let result = [];
    for (let key in allPro) {
        result.push(allPro[key]);
    }

    // เรียงลำดับตาม totalSales (จากมากไปหาน้อย) และชื่อสินค้า (หากยอดขายเท่ากัน)
    result.sort((a, b) => {
        if (b.totalSales !== a.totalSales) {
            return b.totalSales - a.totalSales;
        } else {
            if (a.productName < b.productName) 
                return -1; // ถ้า a ชื่อสินค้าก่อน b
            if (a.productName > b.productName) 
                return 1; // ถ้า a ชื่อสินค้าหลัง b
            return 0; // ถ้าชื่อสินค้าเท่ากัน
        }
    });

    return result; // คืนผลลัพธ์ที่ได้
}

const sampleOrders = [
    {
        orderId: 1,
        orderDate: "2025-01-10",
        items: [
            { productId: "P001", productName: "Pen", quantity: 10, price: 5 },
            { productId: "P002", productName: "Book", quantity: 2, price: 50 }
        ]
    },
    {
        orderId: 2,
        orderDate: "2025-01-11",
        items: [
            { productId: "P001", productName: "Pen", quantity: 5, price: 5 },
            { productId: "P003", productName: "Pencil", quantity: 10, price: 2 }
        ]
    },
    {
        orderId: 3,
        orderDate: "2025-01-12",
        items: [
            { productId: "P002", productName: "Book", quantity: 5, price: 45 },
            { productId: "P004", productName: "Eraser", quantity: 1, price: 3 }
        ]
    },
    {
        orderId: 4,
        orderDate: "2025-01-12",
        items: [
            { productId: "P003", productName: "Pencil", quantity: 5, price: 2 },
            { productId: "P001", productName: "Pen", quantity: 3, price: 5 }
        ]
    }
];

const summaryResult = summarizeOrders(sampleOrders);
console.log(summaryResult);

//module.exports = { summarizeOrders };

/*
อีกวิธีที่สั้นไม่ยุ่งยาก

function summarizeOrders(orders) {
    const productSummary = {};

    // ประมวลผลทุกออร์เดอร์
    orders.forEach(order => {
        // วนลูปแต่ละสินค้าที่อยู่ในรายการของออร์เดอร์
        order.items.forEach(item => {
            const { productId, productName, quantity, price } = item;
            const totalSales = quantity * price;

            // ถ้าสินค้าไม่เคยมีใน productSummary ให้เพิ่มเข้าไป
            if (!productSummary[productId]) {
                productSummary[productId] = {
                    productId: productId,
                    productName: productName,
                    totalQuantity: 0,
                    totalSales: 0,
                    orderCount: 0
                };
            }

            // อัปเดตข้อมูลสินค้าตามที่สั่งซื้อ
            productSummary[productId].totalQuantity += quantity;
            productSummary[productId].totalSales += totalSales;

            // เช็คว่าออร์เดอร์นี้ยังไม่เคยสั่งสินค้านี้
            if (!productSummary[productId].orders) {
                productSummary[productId].orders = new Set(); // ใช้ Set เพื่อหลีกเลี่ยงการนับซ้ำ
            }
            productSummary[productId].orders.add(order.orderId);
        });
    });

    // เปลี่ยน orders เป็นจำนวนออร์เดอร์ที่สินค้าถูกสั่ง
    const result = Object.values(productSummary).map(product => {
        return {
            productId: product.productId,
            productName: product.productName,
            totalQuantity: product.totalQuantity,
            totalSales: product.totalSales,
            orderCount: product.orders.size // ใช้ size ของ Set เพื่อหาจำนวนออร์เดอร์ที่สั่งสินค้านี้
        };
    });

    // เรียงตาม totalSales (มากไปน้อย) ถ้ายอดขายเท่ากัน ให้เรียงตาม productName (ตัวอักษร)
    result.sort((a, b) => {
        if (b.totalSales === a.totalSales) {
            return a.productName.localeCompare(b.productName); // เรียงตามชื่อสินค้า
        }
        return b.totalSales - a.totalSales; // เรียงตามยอดขาย
    });

    return result;
}

// ตัวอย่างการทดสอบ
const orders = [
  {
    orderId: 1,
    orderDate: "2025-01-10",
    items: [
      { productId: "P001", productName: "Pen", quantity: 10, price: 5 },
      { productId: "P002", productName: "Book", quantity: 2, price: 50 }
    ]
  },
  {
    orderId: 2,
    orderDate: "2025-01-11",
    items: [
      { productId: "P001", productName: "Pen", quantity: 5, price: 5 },
      { productId: "P003", productName: "Pencil", quantity: 10, price: 2 }
    ]
  },
  {
    orderId: 3,
    orderDate: "2025-01-12",
    items: [
      { productId: "P001", productName: "Pen", quantity: 5, price: 5 },
      { productId: "P002", productName: "Book", quantity: 1, price: 50 }
    ]
  }
];

console.log(summarizeOrders(orders));

*/