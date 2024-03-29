import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
    axios
      .post("https://day-41-backend-1.onrender.com/send-otp", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate("/otp");
        } else {
          alert("Email / Server Error.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="center"> Forget Password</h1>
      <div className="outcard">
        Email{" "}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="inputs"
          type="text"
        />
        <button onClick={handleSubmit} className="btns">
          SEND OTP{" "}
        </button>
      </div>
    </>
  );
}

export default ForgetPassword;
