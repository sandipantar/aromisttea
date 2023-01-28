import Item from './items';
const Shop = props => {
    const items = () => {
      return props.colors.map((color, index) => {
        return <Item color={color} key={index} />;
      });
    };
  
    return (
            <div className='p-4 d-flex bg-info'>{items()}</div>
          
          );
  };
  export default Shop;