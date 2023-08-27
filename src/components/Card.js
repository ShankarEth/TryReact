
function Card(props)
{
    const logo = props.arr.images[0];
    return(
        <div class="card col-3 mx-3 my-2">
            <img class="card-img-top" height={200} width={60} src={logo} alt="flower"/>
            <div class="card-body">
                <h3 class="card-title">{props.arr.title}</h3>
                <p class="card-text">{props.arr.description}</p>
                <p><b style={{fontSize:"20px"}}>&#x20B9;{props.arr.price}</b> <span class="text-muted">MRP:&#x20B9;<del>{props.arr.price*2}</del></span>
                <span class="badge rounded-pill bg-danger ms-2">{props.arr.discountPercentage}% off</span></p>
            </div>
        </div>
    )
}
export default Card;