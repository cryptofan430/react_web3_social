// IMPORT PACKAGE REFERENCES

import React from 'react';
import CustomButton from '../common/CustomButton'
// import { HoverButtonDiagonal } from '../common/button';
// COMPONENT

const AboutPage = () => (
    <main className="p-3 animated fadeIn">
        <CustomButton className="button" onClick={ () => alert('adf') }>first</CustomButton>
    </main>
);

export { AboutPage };