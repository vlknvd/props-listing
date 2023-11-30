interface MainImageType {
    url_570xN: string
}

interface Item {
    listing_id: number,
    url: string,
    MainImage: MainImageType,
    title: string,
    currency_code: string,
    price: string,
    quantity: number
}

interface ItemProps {
    item: Item
}

const Item: React.FC<ItemProps> = ({
    item: {url, MainImage, title, currency_code, price, quantity }
}) => {
    const trimTitle = (title: string) => {
       if (title.length > 50) return title.slice(50) + '...'
    }

    const checkCurrency = (currency_code: string, price: string) => {
        return (currency_code === 'USD') ? '$' + price:
        (currency_code === 'EUR') ? '€' + price:
        currency_code + price;
    }

    const checkLevel = (quantity: number) => {
        return quantity <= 10 ? 'level-low':
        quantity <= 20 ? 'level-medium' :
        'level-high'
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN} alt = {title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{trimTitle(title)}</p>
                <p className="item-price">{checkCurrency(currency_code, price)}</p>
                <p className={`item-quantity ${checkLevel(quantity)}`}>{quantity} left</p>
            </div>
        </div>
    )
}

export default Item

// export default function Item({ item }: Item): React.ReactNode  {
//     return (
//         <div className="item">
//           <div className="item-image">
//             <a href={item.url}>
//               <img src={item.MainImage.url_570xN} alt={item.title} />
//             </a>
//           </div>
//           <div className="item-details">
//             <p className="item-title">{item.title}</p>
//             <p className="item-price">
//               {item.currency_code + item.price}
//             </p>
//             <p className={`item-quantity level-${item.quantity}`}>
//               {item.quantity}
//             </p>
//           </div>
//         </div>
//       );
// }

