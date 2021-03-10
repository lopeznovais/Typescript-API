import Address from '../models/address.model'
import {Request, Response} from 'express'

export const createAddress = (req: Request, res: Response) => {
    const {address, number, complement, cep, city, state} = req.body;
    Address.create({
        address: address,
        number: number,
        complement: complement,
        cep: cep,
        city: city,
        state: state
    }).then(() => {
        res.send("Address created successefully")
    }).catch(err => {
        console.log(err)
        res.send("Error creating address")
    })
};

export const getAddresses = (req: Request, res: Response) => {
    Address.findAll().then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.send("Error searching for addresses")
    });
};

export const getAddressById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    Address.findByPk(id).then(result => {
        if(!result) res.send("Address not found")
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.send("Error searching for address")
    });
};

export const updateAddress = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {address, number, complement, cep, city, state} = req.body;
    Address.update({
        address: address,
        number: number,
        complement: complement,
        cep: cep,
        city: city,
        state: state
    },
    {
        where: {id: id}
    }).then(() => {
        res.send("Address updated successefully")
    }).catch(err => {
        console.log(err)
        res.send("Error updating address")
    })
};

export const deleteAddress = (req: Request, res: Response)=> {
    const id = parseInt(req.params.id);
    Address.destroy({where: {id: id}}).then(() => {
        res.send("Address deleted successefully")
    }).catch(err => {
        console.log(err)
        res.send("Error deleting address")
    })
};