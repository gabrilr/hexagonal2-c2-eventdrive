import express from 'express';
import { addRegistroController } from '../dependencies';

export const registroRouter = express.Router();

// registroRouter.post('/registro', (req, res) => {
//     addRegistroController.run(req, res)
//       .then(() => {
//        return null;
//       })
//       .catch(error => {
//         console.error(error);
//         res.status(500).send('Error en el archivo registro.routes.ts');
//     });
// });
registroRouter.post('/', addRegistroController.run.bind(addRegistroController))
