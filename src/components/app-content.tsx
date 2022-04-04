/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function AppContent( prop: {
    children: JSX.Element | JSX.Element[]
}) {


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section className='app-content' >
    {
        prop.children
    }
    </section>
)};