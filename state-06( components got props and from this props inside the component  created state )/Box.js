import React  from 'react'

export default  function Box(props){
    const [on, setOn] = React.useState(props.on)
    
    console.log(on)
    function  onOff(){
        // if(on===true){
        //     setOn(false)
        // }else if(on===false){
        //     setOn(true)
        // }
        setOn(prevOn => !prevOn)
    }
    
    const styles ={
        backgroundColor: on ? "#222222":"transparent"
    }
    return (
        <div onClick={onOff} style={styles} className="box" ></div>
    )
}
