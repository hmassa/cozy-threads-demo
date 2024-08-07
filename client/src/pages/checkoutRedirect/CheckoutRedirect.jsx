import "./CheckoutRedirect.css";

export const CheckoutRedirect = ({ failure }) => {
    const cancelledMsg =
        "Order cancelled -- continue to shop around and checkout when you're ready.";
    const successMsg =
        "Order placed! You will receive an email confirmation soon.";

    return <p className="message">{failure ? cancelledMsg : successMsg}</p>;
};
