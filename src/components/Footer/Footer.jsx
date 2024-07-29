function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="p-4 backdrop-blur-sm text-center shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_-4px_6px_-4px_rgba(0,0,0,0.1)]">
            <div>GES | Developed&nbsp;By&nbsp;<a href="https://github.com/PowerTheWeb">PTW&nbsp;Community&nbsp;</a>@&nbsp;{year}</div>
        </footer>
    )
}

export default Footer