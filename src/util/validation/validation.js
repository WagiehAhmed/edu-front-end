import joi from "joi";

//register validation schema
export const registerValidationSchema = joi.object({
    name:joi.string().required().trim().min(5).max(50),
    email:joi.string().email({ tlds: { allow: false } }).required().trim().min(5).max(50),
    password:joi.string().required().trim().min(5).max(50),
    // image:joi.string(),
});
//login validation schema
export const loginValidationSchema = joi.object({
    // name:joi.string().trim().min(5).max(50),
    email:joi.string().email({ tlds: { allow: false } }).required().trim().min(5).max(50),
    password:joi.string().required().trim().min(5).max(50),
});
// //update validation schema
// const updateValidationSchema = joi.object({
//     name:joi.string().trim().min(5).max(50),
//     email:joi.string().trim().min(5).max(50),
//     password:joi.string().trim().min(5).max(50),
//     image:joi.string().trim().min(5).max(50),
// });
// //create chat validation schema
// const createChatValidationSchema = joi.object({
//     members:joi.array().required(),
//     messages:joi.array(),
//     isGroupChat:joi.bool(),
//     lastMessage:joi.string(),
//     groupName:joi.string().trim(),
// });
// //update chat validation schema
// const updateChatValidationSchema = joi.object({
//     members:joi.array(),
//     messages:joi.array(),
//     isGroupChat:joi.bool(),
//     lastMessage:joi.string(),
//     groupName:joi.string().trim(),
// });