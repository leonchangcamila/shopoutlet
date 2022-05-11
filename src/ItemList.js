import Item from '../Item/Item';

const ItemList = ({ items }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;