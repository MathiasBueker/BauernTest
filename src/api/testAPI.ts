import {GatsbyFunctionRequest, GatsbyFunctionResponse} from 'gatsby'

export default function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    res.status(200).json({ message: 'A ok!' });
  }