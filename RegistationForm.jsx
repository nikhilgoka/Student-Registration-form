import { Button, TextField } from "@mui/material";
import { useState } from "react";

function RegistrationForm() {
    //Full Name,Email,Phone Number,Address,Submit,Reset Button
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    function handleSubmit() {
        //Step1: Check whether all feilds are entered
        if (!fullName){
            alert('Please fill all mandatory fields');
            return;
        }
        //step2:store the form data in database 
        //step3:alert about successful submission 
        alert(`Thanks for registering. Your details:
            Full Name: ${fullName}
            Phone Number: ${phone}
            Mail : ${mail}
            `);
        //step4:clear the form field 
        setFullName("");
        setPhone("");
        setMail("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>

        </div>
    );
}
export default RegistrationForm;