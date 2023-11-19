// Code Keypad Component Here

function Keypad (){
    function enterPassword(event){
        console.log(`Entering password...`)
    }
    return (
        <div>
            <input 
                type="password" 
                onChange={enterPassword}/>
        </div>
    )
}

export default Keypad;