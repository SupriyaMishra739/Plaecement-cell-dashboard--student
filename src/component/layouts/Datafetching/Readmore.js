import { Button } from "@material-ui/core";
import { history } from "../../../History";

export default function Readmore(props){
    
    const id="ghgh";
    const readmore=(e)=>{
        console.log("dd",props.Id);
        history.push(
          {
            pathname:`./HomeSec/${props.Id}`
          }
        )
        window.location.reload();
      }
return(
    <>
    <Button onClick={readmore} style={{ color: "#FFF" }}>
                <div style={{color:'white', display:'flex', alignItems:'flex-end'}}>
                <Button color='inherit' className='button' style={{height:38, width:650,
                   background:'#1E4786',marginLeft:10,marginRight:10}}>Read More</Button>
                </div>

    </Button>
    </>
)
}