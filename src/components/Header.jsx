

function Header(props) {
    const listMenu = props.menuOptions.map((item) => {
        return (
            <option key={item.id} id={item.id}>{item.name}</option>
        )
    })

    const getElementId = function (e) {
        const optionSelected = e.target.childNodes[e.target.selectedIndex]
        let selectedId = optionSelected.getAttribute('id')

        props.handleMenuChange(selectedId);
        e.preventDefault();
    }
    
    return (
        <>
            <div className="header--container">
                <select onChange={getElementId}>
                    <option>Please select one option</option>
                    {listMenu}
                </select>
            </div>
        </>
    )
}

export default Header; 