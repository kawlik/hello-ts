/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function ButtonApp( prop: {
    open(): void,
    icon: JSX.Element,
    name: string,
}) {


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<button className='app-button-app btn btn-light' onClick={ () => prop.open() } >
        { prop.icon }
        <small className='text-muted d-block' >{ prop.name }</small>
	</button>
)};