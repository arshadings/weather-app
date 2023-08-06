const Error = () => {
    const refresh = () => window.location.reload(true)
    return(
        <>
            <div className="error-bg">
                <div className="page_404">
                    <div className="four_zero_four_bg">
                    </div>
                    <div className="contant_box_404">
                        <p className="error_msg">Please enter a valid city name</p>
                        <p>The city name you entered is not found</p>
                        <p>Check the spelling and space</p>
                        <button className="link_404" onClick={refresh}>Go to Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error
