/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function DisplayUser( prop: {
    unselectUser(): void,
    selectedUser: string,
    onClickName?: string,
}) {



/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section className='app-display-user' >
        <span className='item lead' ><span>{ prop.selectedUser }</span></span>
        <span className='item btn p-0' onClick={ () => prop.unselectUser() }>{ prop.onClickName || 'change' }</span>
    </section>
)};