import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
const Navbar = () => {

    const [search,setSearch] = useState("")
    const [q,setQ]= useState("All")
    const [language,setLanguage] = useState("hi")
    const [searchParams] = useSearchParams()
 
     const navigate = useNavigate()

    const postSearch = (e)=>{
        e.preventDefault()
        navigate(`/?q=${search}&language=${language}`)
        setSearch("")
    }

    useEffect(()=>{
         (()=>{
             setQ(searchParams?.get("q")??"All")
             setQ(searchParams?.get("language")??"hi")
         })()
    },[searchParams])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={`/q=All&language=${language}`}>NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/q=All&language=${language}`}>All</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Politics&language=${language}`}>Politics</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Education&language=${language}`}>Education</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Crime&language=${language}`}>Crime</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Entertainment&language=${language}`}>Entertainment</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Science&language=${language}`}>Science</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Tachnology&language=${language}`}>Tachnology</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to={`/?q=Economics&language=${language}`}>Economics</Link> </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    other
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/?q=Sports&language=${language}`}>Sports</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Cricket&language=${language}`}>Cricket</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Soccer&language=${language}`}>Soccer</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=World&language=${language}`}>World</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=India&language=${language}`}>India</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=Jokes&language=${language}`}>Jokes</Link></li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=hi`}>Hindi</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=en`}>English</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=es`}>Spanish</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=fr`}>Franch</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=ja`}>Japanese</Link></li>
                                    <li><Link className="dropdown-item" to={`/?q=${q}&language=zh`}>Chines</Link></li>
                                   
                                </ul>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search" onSubmit={postSearch}>
                            <input className="form-control me-2" value={search} type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar