import Axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';

function MainPage()
{
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const url = "https://dummyjson.com/products";
        Axios.get(url)
            .then((res) => setArr(res.data.products))
            .catch((err) => alert(err));
    }, [])

    const Display = () => {
        return arr.map((val) => {
            return <Card arr={val} />
        })
    }
    
    const handleChange = (e) => {
        let searchItem = e.target.value;
        // console.log(searchItem);
        if(searchItem == 'apple')
        {
            console.log("match")
        }
    }

    const Options = () => {
       return arr.map((val) => {
        return <option value={val.brand} />
        })
    }
    return(
        <div class="row" style={{ marginLeft: "12em" }}>
            <input list="list1" type="text" onChange={handleChange} class="form-control" />
            <datalist id="list1">
                <Options />
            </datalist>
                {Display()}
        </div>
    )
}
export default MainPage;