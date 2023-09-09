
import'./style.css'
export const TwowaysofCss:React.FC<{}>=()=>{
    let mystyle={width:'200px',height:'200px',backgroundColor:'yellow'}
    return <>
    <div className="myname">hello im external way</div><br />
    <div style={mystyle}>hello im another way</div>
    </>
}