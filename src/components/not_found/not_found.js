// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Card } from 'react-materialize';

const NotFound = () => (
    <Card className='blue-grey darken-1' textClassName='white-text' title='404 page not found'>
    	Nos desculpe mas a página que você está procurando não existe.
    </Card>
);

export default NotFound;