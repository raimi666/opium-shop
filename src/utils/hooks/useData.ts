export type Price = {
    value: number;
    symbol: string;
    isDefault: number;
};

export type Guarantee = {
    start: string;
    end: string;
};

export type Product = {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: Guarantee;
    price: Price[];
    order: number;
    date: string;
};

export type Order = {
    id: number;
    title: string;
    date: string;
    description: string;
    get products(): Product[];
    cart: number[]
};

const orders: Order[] = [
    {
        id: 1,
        title: 'Order 1',
        date: '2017-06-29 12:09:33',
        description: 'Этому человеку нужно платить много деняк',
        get products () { return products },
        cart: [1]
    },
    {
        id: 2,
        title: 'Order 2',
        date: '2017-06-29 12:09:33',
        description: 'Отправить посылку точно в 10:00 и только Укрпочтой! У моего дяди день рождения через месяц, как раз доедет!',
        get products () { return products },
        cart: [2]
    },
    {
        id: 3,
        title: 'Order 3',
        date: '2017-06-29 12:09:33',
        description: 'Если можно, то отправьте два. Агрессивно катаю в доту!',
        get products () { return products },
        cart: [1, 2]
    }
]

const products: Product[] = [
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: 'https://i5.walmartimages.com/seo/Xgaming-27-inch-165Hz-144Hz-Curved-Gaming-Monitor-Ultra-Wide-16-9-1440p-PC-Monitor-Laptop-2-Speakers-1ms-AMD-QHD2K-2560-x-1440p-HDR-Computer-Support_be788a05-2e83-43a1-8265-bc40142d3ba7.e63b741044b0369464b993ab58e6ddb7.jpeg',
        title: 'Xgaming 27-inch 165Hz/144Hz Curved Gaming Monitor, Ultra Wide 16:9 1440p PC  Monitor for Laptop with 2*Speakers, 1ms AMD, QHD2K(2560 x 1440p) HDR  Computer Monitor Support VESA, HDMI&DP, Metal Black',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2019-06-29 12:09:33'
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 3750, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 2,
        serialNumber: 1234,
        isNew: 1,
        photo: 'https://images.philips.com/is/image/PhilipsConsumer/24M1N3200ZA_00-IMS-ru_UA?$jpglarge$&wid=960',
        title: 'Gaming Monitor Игровой монитор Full HD 24M1N3200ZA/00 | Evnia',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            {value: 200, symbol: 'USD', isDefault: 0},
            {value: 7500, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
    }
]


type GetOrderHookType = {
    orders: Order[]
}

type GetProductsHookType = {
    products: Product[]
}
export const useGetOrders = (): GetOrderHookType => {
    return { orders };
}

export const useGetProducts = (): GetProductsHookType => {
    return { products };
}
