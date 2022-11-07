import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {   
            firstName: "",
            lastName: "", 
            email:"", 
            comments: "",
            isFriendly: true
        }
    )
    console.log(formData.comments)
    
    function handleChange(event){
        const {name,  value, type, checked} = event.target
        setFormData(prevFormData =>  {
            return {
                ...prevFormData,
                [name]: type ==="checkbox" ? checked : value
            }
        })
    }   
         
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments} 
                placeholder="comments"
                onChange={handleChange}
                name="comments"
            />
            
            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <lable htmlFor="isFriendly">Are you friendly?</lable>
                
                
            <br/>
        </form>
    )
}
