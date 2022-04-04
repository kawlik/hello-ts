import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function DisplayUser( prop: {
    unselectUser(): void,
    selectedUser: string,
}) {



/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section className='app-display-user' >
        <span className='item lead' ><span>{ prop.selectedUser }</span></span>
        <span className='item btn p-0' onClick={ () => prop.unselectUser() }>change</span>
    </section>
)};