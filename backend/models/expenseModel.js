import mongoose from "mongoose"


const expenseSchema =  mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            maxLength:50,
            trim: true,
        },
        amount:{
            type: Number,
            required: true,
            maxLength:20,
            trim: true,
        },
        type: {
            type: String,
            default:"expense"
        },
        date:{
            type:Date,
            required: true,
        },
        category:{
            type: String,
            required: true,
            trim: true,
        },
        description:{
            type:String,
            trim: true,
        }
    },
    {
        timestamps:true
    }
);


export const  expenseModel = mongoose.model('Expense', expenseSchema);