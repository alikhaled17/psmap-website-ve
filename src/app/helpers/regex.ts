const Regex = {
    notEmpty: /\S/,
    email: /^(?=.{1,150}$)([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    phone: /^[0-9]{6,15}$/,
};

export default Regex;
