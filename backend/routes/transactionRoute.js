import express from "express";
import { incomeModel } from "../models/incomeModel.js";
import { expenseModel } from "../models/expenseModel.js";

const router = express.Router();



//create income in table
router.post('/add-income',async (req,res)=>{
    try {
        const {title, amount , category , description,date} = req.body;
        if(!title|| !amount || !category ||!date){
            return res.status(400).json({message:"Fill in all required fields"})
        }

        if(amount<0){
            return res.status(400).json({message:"Please enter a positive amount"})
        }
        const newIncome = {
            title:title,
            amount:amount,
            date:date,
            category:category,
            description: description
        };
        await incomeModel.create(newIncome)
        
        res.status(201).json({message:"Income entry created successfully"})
        
    } catch (error) {

        console.log(error.message)
        res.status(500).json({message:error})
        
    }
    
});

// get all incomes in table
router.get("/get-incomes", async (req,res)=>{
    try {
        const incomes = await  incomeModel.find({});
        res.status(200).json({count: incomes.length,
        data:incomes})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
        
    }

});


// delete an income
router.delete("/delete-income/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const results = await incomeModel.findByIdAndDelete(id)

        if(!results){
            res.status(404).json({message:"Income not found"});
        }
        return res.status(200).json({message:"Income delete successfully"})

    } catch (error) {

        console.log(error)
        res.status(500).json({message:error})
        
    }

});

//create expense in table
router.post('/add-expense',async (req,res)=>{
    try {
        const {title, amount , category , description,date} = req.body;
        if(!title|| !amount || !category ||!date){
            return res.status(400).json({message:"Fill in all required fields"})
        }

        if(amount<0){
            return res.status(400).json({message:"Please enter a positive amount"})
        }
        const newExpense = {
            title:title,
            amount:amount,
            date:date,
            category:category,
            description: description
        };
        await expenseModel.create(newExpense)
        
        res.status(201).json({message:"Expense entry created successfully"})
        
    } catch (error) {

        console.log(error.message)
        res.status(500).json({message:error})
        
    }
    
});

// get all expense in table
router.get("/get-expenses", async (req,res)=>{
    try {
        const expenses = await  expenseModel.find({});
        res.status(200).json({count: expenses.length,
        data:expenses})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
        
    }

});


// delete an expense
router.delete("/delete-expense/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const results = await expenseModel.findByIdAndDelete(id)

        if(!results){
            res.status(404).json({message:"Expense not found"});
        }
        return res.status(200).json({message:"Expense deleted successfully"})

    } catch (error) {

        console.log(error)
        res.status(500).json({message:error})
        
    }

});







export default router