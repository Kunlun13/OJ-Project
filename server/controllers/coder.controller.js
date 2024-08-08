import Coder from "../models/coder.model.js";
import express from 'express';
import bcrypt from 'bcryptjs';

    const router = express.Router();
    //router.use(bodyParser.urlencoded({ extended: false }));
        router.post('/new', async ( req, res)=>{
            const newCoder = new Coder(req.body);
            newCoder.password = await bcrypt.hashSync(newCoder.password, 8);
             await newCoder.save().then(
                coder => res.json(coder)
            ).catch(err =>{res.status(400).json("Error! " + err)})
        })
        //router.route('/').get()
        //router.route('/delete/:id').delete()
        router.route('/update/:id').put((req, res)=>{
            Coder.findByIdAndUpdate(req.params.id, req.body)
            .then( coder => res.json("Success! User updated."))
            .catch(err=> res.status(400).json('Error! ' + err))
        })
        export default router;
