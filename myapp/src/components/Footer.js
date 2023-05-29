function Footer() {
    const year = new Date().getFullYear()
    return ( 
        <>
            <div className="footer" style={{width: '100%', height: '60px', background: '#4fa6e4', paddingTop: '12px', borderRadius: '0px 0px 50px 50px', marginTop: '2%'}}>
                <h3 className="text-center text-white">
                Copyright &copy; {year} All rights reserved
                </h3>
            </div>
        </>
     );
}

export default Footer;