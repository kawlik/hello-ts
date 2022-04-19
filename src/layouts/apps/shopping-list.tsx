import { MouseEvent, useState } from 'react';

import AppContent from '../../components/app-content';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function AppShoppingList() {

    // 	in input state
	const [ productName, setProductName ] = useState( '' );

	// 	all products
	const [ products, setProducts ] = useState( [] );


	// 	utilities
	async function addProduct( event: MouseEvent<HTMLButtonElement> ): Promise<void> {
		event.preventDefault();

		// 	delete input value
		setProductName( '' );
	}



/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <>
	<article id='app-layout-shopping-list' >

		<h2 className='lead'>Add new thing to buy</h2>

		<div className='input-group' >
            <input type='text' className='form-control' value={ productName } onChange={ ( event ) => setProductName( event.target.value ) } />
            <button
				className='btn btn-success input-group-text'
				onClick={ ( event ) => addProduct( event ) }
				disabled={ productName.length < 3 }
			><AddShoppingCartIcon /></button>
        </div>

		<AppContent>
		{

		}
		{

		}
		</AppContent>

    </article>
    </>
)};