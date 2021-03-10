import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'

export const signup = (req: Request, res: Response) => {
    const {name, phone, email, age, weight, ethnicity} = req.body;
    if(!name || !phone || !email || !age || !weight || !ethnicity) res.send("Error: Missing user data")
    if(typeof(age) !== 'number' || typeof(weight) !== 'number' || ['Branco', 'Pardo', 'Negro', 'Indígena'].indexOf(ethnicity) < 0) res.send("Error: Invalid user data") 
    User.create({
        name: name,
        phone: phone,
        email: email,
        age: age,
        weight: weight,
        ethnicity: ethnicity
    }).then((result : any) => {
        const token: string = jwt.sign({_id: result.id}, 'SECRET_TOKEN', {
            expiresIn: 60 * 60 * 24
        })
        res.header('auth-token', token).send("User created successefully")
    }).catch(err => {
        console.log(err)
        res.send("Error creating user")
    })
};

export const signin = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    User.findByPk(id).then((result : any) => {
        if(!result) res.send("User not found")
        const token: string = jwt.sign({_id: result.id}, 'SECRET_TOKEN', {
            expiresIn: 60 * 60 * 24
        })
        res.header('auth-token', token).send("User logged successfully")
    }).catch(err => {
        console.log(err)
        res.send("Error signing in")
    });
};

export const getUserById = (req: Request, res: Response) => {
    const id = parseInt(req.userId)
    User.findByPk(id).then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.send("Unable to get user data")
    });
};

export const updateUser = (req: Request, res: Response) => {
    const {name, phone, email, age, weight, ethnicity} = req.body;
    User.update({
        name: name,
        phone: phone,
        email: email,
        age: age,
        weight: weight,
        ethnicity: ethnicity        
    },
    {
        where: {id: req.userId}
    }).then(() => {
        res.send("User data updated")
    }).catch(err => {
        console.log(err)
        res.send("Error updating user data")
    })
};

export const deleteUser = async (req: Request, res: Response)=> {
    const id = req.userId;
    User.destroy({where: {id: id}}).then(result => {
        res.send("User deleted")
    }).catch(err => {
        res.json(err)
    })
};