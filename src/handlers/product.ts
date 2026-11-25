import Product from "../models/Product.model";
import { check, validationResult } from "express-validator";
import {Request,Response} from 'express'
export const createProduct = async (req : Request, res : Response) => {
  try {
    
        await check('name')
        .notEmpty().withMessage('El nombre de producto no puede ir vacio')
        .run(req)
        await check('price')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage("El precio del producto no puedo ir vacio")
        .custom(value=> value > 0).withMessage("El precio no puede ser menor a 0")
        .run(req)
        let errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
       const product = new Product (req.body)
       const savedProduct= await product.save()
        res.json(product)
  } catch (error) {
        console.log(error);
  }
        
   
}

