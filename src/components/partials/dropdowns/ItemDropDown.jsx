import {useState} from 'react';
import '../../../styles/ItemDropDown.css';

export default function ItemDropDown({items=[...Array(10)], setActiveItem}){

    const [open, setOpen] = useState({transform: "TranslateY(-506px)"});
    function toggle(){
        if(open.transform === "TranslateY(-506px)"){
            setOpen({transform: "TranslateY(-10px)"});
        }else{
            setOpen({transform: "TranslateY(-506px)"});
        }
    }
    return (
    <>
        <div class="idd">
            <div className="card-background"
                style={open}>
                {items.map((e, i) => {
                    return (
                        <div className="card" key={i}
                        style={{
                            top : 100 * (i%5), 
                            left : 100 * Math.floor(i/5),
                        }}></div>
                    )
                }, this)}   
                <div className="expand" onClick={toggle}>Inventory</div>
            </div>
        </div>
    </>
    );
}
