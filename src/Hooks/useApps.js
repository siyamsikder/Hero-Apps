import axios from "axios";
import { useEffect, useState } from "react"

const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoding] = useState(true)
    const [eror, setError] = useState(null)

    useEffect(() => {
        setLoding(true)
        axios("../AllAplications.json")
        .then(data => setApps(data.data))
        .catch(err =>setError(err))
        .finally(()=> setLoding(false))

    }, [])
    return { apps, loading, eror }
}
export default useApps