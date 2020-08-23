import React from 'react';

import './comparison-table.styles.scss';

export const ComparisonTable = ( {fundsToBeCompared} ) => {
     console.log(fundsToBeCompared)
    return (
        <div className= 'comparision-table'>
            <table className='table'>
            
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Fund Type</th>
                        <th>1 yr return</th>
                        <th>Average 3yr Rolling Return</th>
                        <th>3Y Standard Deviation </th>
                    </tr>
                </thead>
                <tbody>
                    {fundsToBeCompared.map(
                        ({ id, name, FundType, oneyearReturn, threeyearReturn, fiveyearReturn }) =>
                            (<tr key={id}>
                                <td className='name'> {name} </td>
                                <td> {FundType} </td>
                                <td> {oneyearReturn} </td>
                                <td> {fiveyearReturn} </td>
                                <td> {threeyearReturn} </td>
                            </tr>)
                    )}
                </tbody>
                
            </table>
            
        </div>
    );
}